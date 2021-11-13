import logo512Image from "../assets/logo512.webp";
import { useState, useEffect } from "react";
import TimePickerCell from "./TimePickerCell";
import bellSound from "../sounds/bell.mp3";
import webNotification from "simple-web-notification";
let timer = null;
let defaultHours = "00";
let defaultMinutes = "05";
let defaultSeconds = "30";

function TimePicker({ isInfiniteMode }) {
	const [isStartShow, setIsStartShow] = useState(true);
	const [isPauseShow, setIsPauseShow] = useState(true);
	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const [count, setCount] = useState(0);
	const [hours, setHours] = useState(defaultHours);
	const [minutes, setMinutes] = useState(defaultMinutes);
	const [seconds, setSeconds] = useState(defaultSeconds);

	const addLeadingZero = (num) => {
		num = num.toString();
		if (num.length === 1) {
			num = "0" + num;
		}

		return num;
	};

	useEffect(() => {
		document.title = `${
			+hours ? addLeadingZero(hours) + ":" : ""
		}${addLeadingZero(minutes)}:${addLeadingZero(seconds)} | Timer`;

		if (!isTimerStarted) {
			return;
		}

		function finishRound() {
			playSound();
			setHours(defaultHours);
			setMinutes(defaultMinutes);
			setSeconds(defaultSeconds);
			setCount((state) => state + 1);
		}

		function startNextMinute() {
			setSeconds("59");
			setMinutes((state) => addLeadingZero(state - 1));
		}

		function startNextHour() {
			setMinutes("59");
			setHours((state) => addLeadingZero(state - 1));
		}

		if (+hours === 0 && +minutes === 0 && +seconds === 0) {
			finishRound();

			if (isInfiniteMode) {
				startCircleAnimation(defaultHours, defaultMinutes, defaultSeconds);
			} else {
				pause();
				showNextRoundNotification();
			}
		} else if (+seconds === -1) {
			startNextMinute();

			if (+minutes === 0) {
				startNextHour();
			}
		}
	}, [seconds, minutes, hours, isTimerStarted, isInfiniteMode]);

	const playSound = () => {
		let sound = new Audio(bellSound);
		sound.play();
	};

	const startCircleAnimation = (hr, min, sec) => {
		const timeCircleAnimation = document.getElementById("timeCircleAnimation");
		timeCircleAnimation.setAttribute("dur", +hr * 60 * 60 + +min * 60 + +sec);
		timeCircleAnimation.beginElement();
	};

	const stopCircleAnimation = () => {
		const timeCircleAnimation = document.getElementById("timeCircleAnimation");
		timeCircleAnimation.setAttribute("dur", 0);
	};

	const startTimer = (hr = hours, min = minutes, sec = seconds) => {
		if (+hr === 0 && +min === 0 && +sec === 0) {
			return;
		}

		timer = setInterval(() => {
			setSeconds((state) => addLeadingZero(state - 1));
		}, 1000);

		startCircleAnimation(hr, min, sec);
		setIsTimerStarted(true);
	};

	const stopTimer = () => {
		clearInterval(timer);
		stopCircleAnimation();
		setIsTimerStarted(false);
	};

	const start = () => {
		startTimer();
		defaultHours = hours;
		defaultMinutes = minutes;
		defaultSeconds = seconds;
		setIsStartShow(false);
		setIsPauseShow(true);
	};

	const play = (hr, min, sec) => {
		startTimer(hr, min, sec);
		setIsPauseShow(true);
	};

	const pause = () => {
		stopTimer();
		setIsPauseShow(false);
	};

	const stop = () => {
		stopTimer();
		setIsStartShow(true);
		setHours(defaultHours);
		setMinutes(defaultMinutes);
		setSeconds(defaultSeconds);
		setCount(0);
	};

	const showNextRoundNotification = () => {
		let options = {
			body: "Timer paused",
			silent: true,
			icon: logo512Image,
			badge: logo512Image,
			onClick: () => play(defaultHours, defaultMinutes, defaultSeconds),
			requireInteraction: true,
		};

		webNotification.showNotification("Click to Play Next Round 🎬", options);
	};

	return (
		<div className="timer-picker">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="120"
				height="120"
				className="mx-auto mb-2 md:mb-6"
				viewBox="0 0 120 120"
			>
				<title>Counter</title>
				<circle
					cx="60"
					cy="60"
					r="50"
					fill="none"
					stroke="var(--color-primary)"
					strokeWidth="5"
				/>
				<circle
					cx="60"
					cy="60"
					r="50"
					transform="rotate(-90 60 60)"
					fill="none"
					strokeDashoffset="314"
					strokeDasharray="314"
					stroke="var(--color-accent)"
					strokeWidth="5"
				>
					<animate
						id="timeCircleAnimation"
						attributeName="stroke-dashoffset"
						begin="indefinite"
						dur="0"
						values="314;0"
					/>
				</circle>
				<text
					x="50%"
					y="60%"
					fill="var(--color-primary)"
					textAnchor="middle"
					dy="7"
					fontSize="48"
				>
					{count}
				</text>
			</svg>
			<div className="flex items-center justify-center gap-2 -m-2">
				<TimePickerCell
					label="hours"
					time={hours}
					setTime={setHours}
					isTimerStarted={isTimerStarted}
					max={99}
					fancy
				/>
				<span className="text-5xl mt-12">:</span>
				<TimePickerCell
					label="minutes"
					time={minutes}
					setTime={setMinutes}
					isTimerStarted={isTimerStarted}
				/>
				<span className="text-5xl mt-12">:</span>
				<TimePickerCell
					label="seconds"
					time={seconds}
					setTime={setSeconds}
					isTimerStarted={isTimerStarted}
				/>
			</div>
			<div className="mt-12 flex items-center justify-center gap-7">
				{isStartShow && (
					<button className="btn btn_success w-full" onClick={start}>
						<svg
							width="13"
							height="14"
							viewBox="0 0 13 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1 12.2352V1.71741C1 0.950879 1.82696 0.469358 2.4936 0.847721L11.5088 5.96447C12.1749 6.34253 12.1862 7.29838 11.5292 7.69199L2.51393 13.093C1.84739 13.4923 1 13.0122 1 12.2352Z" />
						</svg>
						<span>Start</span>
					</button>
				)}
				{!isStartShow && (
					<button className="btn btn_danger w-1/2" onClick={stop}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="14"
							viewBox="0 0 12 14"
						>
							<rect width="12" height="14" rx="2" />
						</svg>
						<span>Stop</span>
					</button>
				)}
				{!isStartShow && (
					<button
						className="btn btn_fancy w-1/2"
						onClick={isPauseShow ? pause : play}
					>
						<svg
							width="12"
							height="14"
							viewBox="0 0 12 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							{isPauseShow && <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" />}
							{!isPauseShow && (
								<path d="M1 12.2352V1.71741C1 0.950879 1.82696 0.469358 2.4936 0.847721L11.5088 5.96447C12.1749 6.34253 12.1862 7.29838 11.5292 7.69199L2.51393 13.093C1.84739 13.4923 1 13.0122 1 12.2352Z" />
							)}
						</svg>
						<span>{isPauseShow ? "Pause" : "Play"}</span>
					</button>
				)}
			</div>
		</div>
	);
}

export default TimePicker;

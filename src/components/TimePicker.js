import { useState, useEffect } from "react";
import TimePickerCell from "./TimePickerCell";
import bellSound from "../sounds/bell.mp3";
let timer = null;
let defaultMinutes = "05";
let defaultSeconds = "30";

function TimePicker() {
	const [isStartShow, setIsStartShow] = useState(true);
	const [isPauseShow, setIsPauseShow] = useState(true);
	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const [count, setCount] = useState(0);
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
		document.title = `${addLeadingZero(minutes)}:${addLeadingZero(
			seconds
		)} | Timer`;

		if (!isTimerStarted) {
			return;
		}

		function startNextRound() {
			setMinutes(defaultMinutes);
			setSeconds(defaultSeconds);
			setCount((state) => state + 1);
			playSound();
			startCircleAnimation(defaultMinutes, defaultSeconds);
		}

		function startNextMinute() {
			setSeconds("59");
			setMinutes((state) => addLeadingZero(state - 1));
		}

		if (+minutes === 0 && +seconds === 0) {
			startNextRound();
		} else if (+seconds === -1) {
			startNextMinute();
		}
	}, [seconds, minutes, isTimerStarted]);

	const playSound = () => {
		let sound = new Audio(bellSound);
		sound.play();
	};

	const startCircleAnimation = (min, sec) => {
		const timeCircleAnimation = document.getElementById("timeCircleAnimation");
		timeCircleAnimation.setAttribute("dur", +min * 60 + +sec);
		timeCircleAnimation.beginElement();
	};

	const stopCircleAnimation = () => {
		const timeCircleAnimation = document.getElementById("timeCircleAnimation");
		timeCircleAnimation.setAttribute("dur", 0);
	};

	const startTimer = () => {
		if (+minutes === 0 && +seconds === 0) {
			return;
		}

		timer = setInterval(() => {
			setSeconds((state) => addLeadingZero(state - 1));
		}, 1000);

		startCircleAnimation(minutes, seconds);
		setIsTimerStarted(true);
	};

	const stopTimer = () => {
		clearInterval(timer);
		stopCircleAnimation();
		setIsTimerStarted(false);
	};

	const start = () => {
		startTimer();
		defaultMinutes = minutes;
		defaultSeconds = seconds;
		setIsStartShow(false);
		setIsPauseShow(true);
	};

	const play = () => {
		startTimer();
		setIsPauseShow(true);
	};

	const pause = () => {
		stopTimer();
		setIsPauseShow(false);
	};

	const stop = () => {
		stopTimer();
		setIsStartShow(true);
		setMinutes(defaultMinutes);
		setSeconds(defaultSeconds);
		setCount(0);
	};

	return (
		<div className="mx-auto w-max">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="120"
				height="120"
				className="mx-auto"
				viewBox="0 0 120 120"
			>
				<circle
					cx="60"
					cy="60"
					r="50"
					fill="none"
					stroke="black"
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
					stroke="white"
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
					fill="#e7e7e7"
					textAnchor="middle"
					dy="7"
					fontSize="48"
				>
					{count}
				</text>
			</svg>
			<div className="flex items-center justify-center gap-2 -m-2">
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
						Start
					</button>
				)}
				{!isStartShow && (
					<button className="btn btn_danger w-1/2" onClick={stop}>
						Stop
					</button>
				)}
				{!isStartShow && (
					<button
						className="btn btn_fancy w-1/2"
						onClick={isPauseShow ? pause : play}
					>
						{isPauseShow ? "Pause" : "Play"}
					</button>
				)}
			</div>
		</div>
	);
}

export default TimePicker;

import { useState, useEffect } from "react";
import TimePickerCell from "./TimePickerCell";
import bellSound from "../sounds/bell.mp3";
let timer = null;

function TimePicker() {
	let defaultMinutes = "05";
	let defaultSeconds = "30";
	const [isStartShow, setIsStartShow] = useState(true);
	const [isPauseShow, setIsPauseShow] = useState(true);
	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const [count, setCount] = useState(0);
	const [minutes, setMinutes] = useState(defaultMinutes);
	const [seconds, setSeconds] = useState(defaultSeconds);

	const addLeadingZero = (num) => {
		if (num.toString().length === 1) {
			return (num = "0" + num);
		} else {
			return num.toString();
		}
	};

	useEffect(() => {
		document.title = `${addLeadingZero(minutes)}:${addLeadingZero(
			seconds
		)} | Timer`;

		if (!isTimerStarted) {
			return;
		}

		if (+minutes === 0 && +seconds === 0) {
			setMinutes(defaultMinutes);
			setSeconds(defaultSeconds);
			setCount((state) => state + 1);
			startCircleAnimation(defaultMinutes, defaultSeconds);
			ring();
			return;
		}

		if (+seconds === -1) {
			setSeconds("59");
			setMinutes((state) => addLeadingZero(state - 1));
		}
	}, [seconds, minutes, isTimerStarted, defaultMinutes, defaultSeconds]);

	const ring = () => {
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
		defaultMinutes = minutes;
		defaultSeconds = seconds;
		setIsTimerStarted(true);
	};

	const stopTimer = () => {
		clearInterval(timer);
		stopCircleAnimation();
		setIsTimerStarted(false);
	};

	const start = () => {
		startTimer();
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
		<div>
			<svg
				id="svg1"
				xmlns="http://www.w3.org/2000/svg"
				height="200"
				className="mx-auto"
				viewBox="0 0 120 120"
			>
				<rect width="100%" height="100%" fill="transparent" />
				<circle
					cx="60"
					cy="60"
					r="50"
					fill="none"
					stroke="transparent"
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
			<div className="mt-12 flex items-center justify-center gap-8">
				{isStartShow && (
					<button
						className="btn btn_success btn_big"
						onClick={start}
					>
						Start
					</button>
				)}
				{!isStartShow && (
					<button className="btn btn_danger btn_md" onClick={stop}>
						Stop
					</button>
				)}
				{!isStartShow && (
					<button
						className="btn btn_fancy btn_md"
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

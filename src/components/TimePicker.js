import logo512Image from "../assets/logo512.webp";
import { useState, useEffect } from "react";
import bellSound from "../sounds/bell.mp3";
import TimePickerCell from "./TimePickerCell";
import ProgressCircle from "./ProgressCircle";

let timerId = null;
let notification = null;
let defaultTime = {
	h: "00",
	m: "05",
	s: "00",
};

function TimePicker({ isInfiniteMode }) {
	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const [isStartShow, setIsStartShow] = useState(true);
	const [isPauseShow, setIsPauseShow] = useState(true);
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(defaultTime);
	const [totalTime, setTotalTime] = useState(0);

	const getTimeInSeconds = (time) => {
		return +time.h * 60 * 60 + +time.m * 60 + +time.s;
	};

	useEffect(() => {
		setTotalTime(getTimeInSeconds(defaultTime));

		document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "visible") {
				// The tab has become visible so clear the now-stale Notification.
				setTimeout(() => {
					notification && notification.close();
				}, 300);
			}
		});
	}, []);

	const addLeadingZero = (num) => {
		if (num === -1) {
			return -1;
		}

		num = num.toString();
		if (num.length === 1) {
			num = "0" + num;
		}

		return num;
	};

	const setTimeProp = (key, value) => {
		setTime((prev) => {
			return {
				...prev,
				[key]: addLeadingZero(value),
			};
		});
	};

	const decrementTimeProp = (key) => {
		setTime((prev) => {
			let numValue = +prev[key];

			return {
				...prev,
				[key]: addLeadingZero(numValue - 1),
			};
		});
	};

	const setDocumentTitle = () => {
		document.title = `${
			+time.h ? addLeadingZero(time.h) + ":" : ""
		}${addLeadingZero(time.m)}:${addLeadingZero(time.s)} | React Timer`;
	};

	const tick = () => {
		function finishRound() {
			playSound();
			setTime(defaultTime);
			setTotalTime(getTimeInSeconds(defaultTime));
			setCount((state) => state + 1);
		}

		function startNextMinute() {
			setTimeProp("s", 59);
			decrementTimeProp("m");
		}

		function startNextHour() {
			setTimeProp("m", 59);
			decrementTimeProp("h");
		}

		setDocumentTitle();
		if (!isTimerStarted) {
			return;
		}

		playFakeSound(); // Prevent Chrome Tab Freezing

		if (+time.h === 0 && +time.m === 0 && +time.s === 0) {
			finishRound();
			if (isInfiniteMode) {
				start();
			} else {
				stop();
				showNextRoundNotification();
			}
		} else if (+time.s === -1) {
			startNextMinute();

			if (+time.m === 0) {
				startNextHour();
			}
		}
	};

	useEffect(tick, [time.s]);

	const startTimer = () => {
		setTime((time) => {
			let isTimeNotSet = +time.h === 0 && +time.m === 0 && +time.s === 0;

			if (!timerId && !isTimeNotSet) {
				timerId = setInterval(() => decrementTimeProp("s"), 1000);
				setIsTimerStarted(true);
			}

			return time;
		});
	};

	const stopTimer = () => {
		setTime((time) => {
			clearInterval(timerId);
			timerId = null;
			setIsTimerStarted(false);

			return time;
		});
	};

	const playFakeSound = () => {
		let sound = new Audio();
		sound.play();
	};

	const playSound = () => {
		let sound = new Audio(bellSound);
		sound.play();
	};

	const start = () => {
		setTimeout(() => {
			notification && notification.close();
		});
		startTimer();
		setIsStartShow(false);
		setIsPauseShow(true);
	};

	const play = () => {
		setIsPauseShow(true);
		startTimer();
	};

	const pause = () => {
		setIsPauseShow(false);
		stopTimer();
	};

	const stop = () => {
		setCount(0);
		setTime(defaultTime);
		setIsStartShow(true);
		stopTimer();
	};

	const onChangeTime = (value, prop) => {
		defaultTime[prop] = addLeadingZero(value);
		setTimeProp(prop, value);
		setTime((time) => {
			setTotalTime(getTimeInSeconds(time));
			return time;
		});
	};

	const showNextRoundNotification = () => {
		let options = {
			body: "Timer stoped",
			silent: true,
			icon: logo512Image,
			badge: logo512Image,
			requireInteraction: true,
		};

		notification = new Notification("Click to Play Next Round 🎬", options);
		notification.onclick = () => start();
	};

	return (
		<div className="timer-picker">
			<ProgressCircle time={time} tick={time.s} total={totalTime} />
			<div className="flex items-center justify-center gap-2 mt-5">
				<TimePickerCell
					label="hours"
					time={time.h}
					setTime={(value) => onChangeTime(value, "h")}
					isTimerStarted={isTimerStarted}
					max={99}
					fancy
				/>
				<span className="text-5xl mt-12">:</span>
				<TimePickerCell
					label="minutes"
					time={time.m}
					setTime={(value) => onChangeTime(value, "m")}
					isTimerStarted={isTimerStarted}
				/>
				<span className="text-5xl mt-12">:</span>
				<TimePickerCell
					label="seconds"
					time={time.s}
					setTime={(value) => onChangeTime(value, "s")}
					isTimerStarted={isTimerStarted}
				/>
			</div>
			<div className="mt-12 flex items-center justify-center gap-7">
				{isStartShow ? (
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
				) : (
					<>
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
						{isPauseShow ? (
							<button className="btn btn_fancy w-1/2" onClick={pause}>
								<svg
									width="12"
									height="14"
									viewBox="0 0 12 14"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" />
								</svg>
								<span>Pause</span>
							</button>
						) : (
							<button className="btn btn_fancy w-1/2" onClick={play}>
								<svg
									width="12"
									height="14"
									viewBox="0 0 12 14"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1 12.2352V1.71741C1 0.950879 1.82696 0.469358 2.4936 0.847721L11.5088 5.96447C12.1749 6.34253 12.1862 7.29838 11.5292 7.69199L2.51393 13.093C1.84739 13.4923 1 13.0122 1 12.2352Z" />
								</svg>
								<span>Play</span>
							</button>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default TimePicker;

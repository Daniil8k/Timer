import Toolbar from "./Toolbar";
import { useState, useEffect } from "react";
import { getTimeInSeconds, addLeadingZero, playSound } from "@/utils/utils";
import {
	close as closeNotifiaction,
	show as showNotification,
} from "@/utils/Notification";

import silenceSound from "@/sounds/1-second-of-silence.mp3";
import bellSound from "@/sounds/bell.mp3";

import Cell from "./Cell/Cell";
import Header from "./Header/Header";

let timerId = null;
let defaultTime = (() => {
	let time = localStorage.getItem("time");
	let parsedTime = JSON.parse(time);
	
	return parsedTime
		? parsedTime
		: {
				h: "00",
				m: "05",
				s: "00",
		  };
})();

export default function Timer({ isInfiniteMode }) {
	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const [isStartShow, setIsStartShow] = useState(true);
	const [isPauseShow, setIsPauseShow] = useState(true);
	const [count, setCount] = useState(1);
	const [time, setTime] = useState(defaultTime);
	const [totalTime, setTotalTime] = useState(getTimeInSeconds(defaultTime));
	const [currentSound, setCurrentSound] = useState(
		localStorage.getItem("sound") || bellSound
	);

	const calculateTotalTime = (time) => {
		setTotalTime(getTimeInSeconds(time));
	};

	const setDocumentTitle = () => {
		document.title = `${
			+time.h ? addLeadingZero(time.h) + ":" : ""
		}${addLeadingZero(time.m)}:${addLeadingZero(time.s)} | React Timer`;
	};

	const onPageVisible = () => {
		if (document.visibilityState === "visible") {
			// The tab has become visible so clear the now-stale Notification.
			closeNotifiaction();
		}
	};

	const onKeyDown = (e) => {
		switch (e.key.toLowerCase()) {
			case "p":
			case "з":
				setIsTimerStarted((isTimerStarted) => {
					if (isTimerStarted) {
						pause();
					} else {
						play();
					}
					return isTimerStarted;
				});
				break;
			case "escape":
				stop();
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		document.addEventListener("visibilitychange", onPageVisible);
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("visibilitychange", onPageVisible);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

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

	useEffect(() => {
		setDocumentTitle();
	}, [time]);

	const tick = () => {
		function finishRound() {
			playSound(currentSound);
			setTime(defaultTime);
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

		if (!isTimerStarted) {
			return;
		}

		playSound(silenceSound); // Prevent Chrome Tab Freezing

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

	const onChangeTime = (value, prop) => {
		defaultTime[prop] = addLeadingZero(value);
		setTimeProp(prop, value);
		setTime((time) => {
			calculateTotalTime(time);
			defaultTime = time;
			localStorage.setItem("time", JSON.stringify(time));
			return time;
		});
	};

	const showNextRoundNotification = () => {
		showNotification("Click to Play Next Round 🎬", "Timer stoped", start);
	};

	const start = () => {
		closeNotifiaction();
		startTimer();
		setIsStartShow(false);
		setIsPauseShow(true);
	};

	const play = () => {
		setIsStartShow(false);
		setIsPauseShow(true);
		startTimer();
	};

	const pause = () => {
		setIsStartShow(false);
		setIsPauseShow(false);
		stopTimer();
	};

	const stop = () => {
		setCount(1);
		setTime(defaultTime);
		setIsStartShow(true);
		calculateTotalTime(defaultTime);
		stopTimer();
	};

	return (
		<div className="time-picker">
			<Header
				count={count}
				time={time}
				totalTime={totalTime}
				isTimerStarted={isTimerStarted}
				currentSound={currentSound}
				setCurrentSound={setCurrentSound}
			/>
			<div className="time-picker__content">
				<div className="flex items-center justify-center gap-2">
					<Cell
						label="hours"
						time={String(time.h)}
						setTime={(value) => onChangeTime(value, "h")}
						isTimerStarted={isTimerStarted}
						max={99}
						fancy
					/>
					<span className="text-5xl mt-12">:</span>
					<Cell
						label="minutes"
						time={String(time.m)}
						setTime={(value) => onChangeTime(value, "m")}
						isTimerStarted={isTimerStarted}
					/>
					<span className="text-5xl mt-12">:</span>
					<Cell
						label="seconds"
						time={String(time.s)}
						setTime={(value) => onChangeTime(value, "s")}
						isTimerStarted={isTimerStarted}
					/>
				</div>
				<Toolbar {...{ isStartShow, isPauseShow, start, play, pause, stop }} />
			</div>
		</div>
	);
}

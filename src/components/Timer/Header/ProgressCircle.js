import { useEffect, useState, useRef } from "react";
import { getTimeInSeconds } from "@/utils/utils";

export default function ProgressCircle({ isTimerStarted, totalTime, time }) {
	const [progress, setProgress] = useState(0);
	const spinner = useRef(null);

	function getPct(value) {
		// console.log("total ", total);
		// console.log("pct ", Math.floor((value * 100) / total));
		let pct = Math.floor((value * 100) / totalTime);
		return isFinite(pct) && pct > 0 && pct <= 100 ? pct : 0;
	}

	useEffect(() => {
		if (totalTime - getTimeInSeconds(time) === 0) {
			setProgress(0);
			setCircle(0);
		}

		if (isTimerStarted) {
			setProgress(() => getPct(totalTime - getTimeInSeconds(time)));
			setProgress((value) => {
				setCircle(value);
				return value;
			});
		}
	}, [time.s, isTimerStarted, totalTime]);

	function setCircle(value) {
		if (isFinite(value) && value >= 0 && value <= 100) {
			spinner.current.style.background = `conic-gradient(var(--color-accent) ${value}%, #171a1f ${
				value + 1
			}%)`;
		}
	}

	return (
		<div className="progress-circle">
			<div id="middle">{progress}%</div>
			<div ref={spinner} id="spinner"></div>
		</div>
	);
}

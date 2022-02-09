import { useEffect, useState, useRef } from "react";

export default function ProgressCircle({ tick, total, time }) {
	const [progress, setProgress] = useState(0);
	const spinner = useRef(null);

	const getTimeInSeconds = (time) => {
		return +time.h * 60 * 60 + +time.m * 60 + +time.s;
	};

	function getPct(value) {
		console.log("total ", total);
		console.log("pct ", Math.floor((value * 100) / total));
		let pct = Math.floor((value * 100) / total);
		return isFinite(pct) && pct > 0 && pct <= 100 ? pct : 0;
	}

	useEffect(() => {
		setProgress(() => getPct(total - getTimeInSeconds(time)));
		setProgress((value) => {
			setCircle(value);
			return value;
		});
	}, [tick]);

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

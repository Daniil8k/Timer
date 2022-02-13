import { useRef } from "react";
import ReactInputMask from "react-input-mask";
import propTypes from "prop-types";
function TimePickerCell({
	time,
	setTime,
	isTimerStarted,
	label,
	fancy,
	max = 59,
}) {
	let timeInput = useRef(null);

	const addLeadingZero = (num) => {
		num = num.toString();
		if (num.length === 1) {
			num = "0" + num;
		}

		return num;
	};

	const increaceTime = () => {
		let timeNumber = Number(time);
		let newTime;

		if (timeNumber === max) {
			newTime = "00";
		} else {
			newTime = (timeNumber + 1).toString();
		}

		newTime = addLeadingZero(newTime);
		setTime(newTime);
	};

	const decreaceTime = () => {
		let timeNumber = Number(time);
		let newTime;

		if (timeNumber === 0) {
			newTime = String(max);
		} else {
			newTime = (timeNumber - 1).toString();
		}

		newTime = addLeadingZero(newTime);
		setTime(newTime);
	};

	const setValidTime = (time) => {
		if (Number(time) > max) {
			setTime(String(max));
		} else {
			let newTime = addLeadingZero(time);
			setTime(newTime);
		}
	};

	const changeTimeValue = (event) => {
		if (isTimerStarted) {
			return;
		}

		if (event.deltaY >= 0) {
			decreaceTime();
		} else {
			increaceTime();
		}
	};

	const setCursorPosition = () => {
		timeInput.current.setSelection(0, 0);
	};

	return (
		<div className={`${fancy && "time-picker-cell__input_fancy"}`}>
			<label
				htmlFor={`${label}-input`}
				className="block text-lg mb-4 mx-auto cursor-pointer capitalize"
				onWheel={($event) => changeTimeValue($event)}
				title="scroll to change value"
			>
				{label}
			</label>
			<div className="flex flex-col gap-1">
				<button
					className={`time-picker-cell__arrow ${
						isTimerStarted ? "invisible" : "visible"
					}`}
					onClick={increaceTime}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						width="24px"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
					</svg>
				</button>
				<ReactInputMask
					ref={timeInput}
					id={`${label}-input`}
					className="time-picker-cell__input"
					value={time}
					mask="99"
					maskChar={null}
					alwaysShowMask="false"
					title="scroll to change value"
					onWheel={($event) => changeTimeValue($event)}
					disabled={isTimerStarted}
					onClick={() => setCursorPosition()}
					onChange={(e) => {
						setTime(e.target.value);
					}}
					onBlur={(e) => {
						setValidTime(e.target.value);
					}}
				/>
				<button
					className={`time-picker-cell__arrow ${
						isTimerStarted ? "invisible" : "visible"
					}`}
					onClick={decreaceTime}
					fill="#000000"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						width="24px"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
					</svg>
				</button>
			</div>
		</div>
	);
}

TimePickerCell.propTypes = {
	time: propTypes.string,
	setTime: propTypes.func,
	isTimerStarted: propTypes.bool,
	label: propTypes.string,
};

export default TimePickerCell;

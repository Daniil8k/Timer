import ReactInputMask from "react-input-mask";
import propTypes from "prop-types";

function TimePickerCell({ time, setTime, isTimerStarted, label }) {
	const addLeadingZero = (num) => {
		num = num.toString()
		if (num.length === 1) {
			num = "0" + num;
		}

		return num;
	};

	const increaceTime = () => {
		let timeNumber = Number(time);
		let newTime;

		if (timeNumber === 59) {
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
			newTime = "59";
		} else {
			newTime = (timeNumber - 1).toString();
		}

		newTime = addLeadingZero(newTime);
		setTime(newTime);
	};

	const setValidTime = (time) => {
		if (Number(time) > 59) {
			setTime("59");
		} else {
			let newTime = addLeadingZero(time);
			setTime(newTime);
		}
	};

	return (
		<div>
			<label
				htmlFor={`${label}-input`}
				className="block text-lg select-none mb-4 mx-auto"
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
					ᐃ
				</button>
				<ReactInputMask
					id={`${label}-input`}
					className="time-picker-cell__input"
					value={time}
					mask="99"
					maskChar={null}
					alwaysShowMask="false"
					disabled={isTimerStarted}
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
				>
					ᐁ
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

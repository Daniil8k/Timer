import ReactInputMask from "react-input-mask";
import propTypes from "prop-types";

function TimePickerCell({ time, setTime, isTimerStarted }) {
	const addLeadingZero = (num) => {
		if (num.toString().length === 1) {
			return (num = "0" + num);
		} else {
			return num.toString();
		}
	};

	const increaceValue = () => {
		let valueNumber = +time;
		let newValue = "00";

		if (valueNumber < 59) {
			newValue = valueNumber + 1;
		}

		newValue = addLeadingZero(newValue);
		setTime(newValue);
	};

	const decreaceValue = () => {
		let valueNumber = +time;
		let newValue = "59";

		if (valueNumber > 0) {
			newValue = valueNumber - 1;
		}

		newValue = addLeadingZero(newValue);
		setTime(newValue);
	};

	const setValidTime = (time) => {
		if (time > 59) {
			setTime("00");
		} else {
			let newValue = addLeadingZero(time);
			setTime(newValue);
		}
	};

	return (
		<div className="flex flex-col gap-1">
			<button
				className={`time-picker-cell__arrow ${
					isTimerStarted ? "invisible" : "visible"
				}`}
				onClick={increaceValue}
			>
				ᐃ
			</button>
			<ReactInputMask
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
				onClick={decreaceValue}
			>
				ᐁ
			</button>
		</div>
	);
}

TimePickerCell.propTypes = {
	time: propTypes.string,
	setTime: propTypes.func,
	isTimerStarted: propTypes.bool
};

export default TimePickerCell;

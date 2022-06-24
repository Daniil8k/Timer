import ProgressCircle from "./ProgressCircle";
import SoundSelect from "./SoundSelect";

export default function Header({
	isTimerStarted,
	count,
	time,
	totalTime,
	currentSound,
	setCurrentSound,
}) {
	return (
		<div className="flex items-center justify-around gap-2 mt-12">
			<div className="info-block">
				<label className="info-block__label">Round</label>
				<div className="info-block__content ">{count}</div>
			</div>
			<ProgressCircle
				isTimerStarted={isTimerStarted}
				time={time}
				totalTime={totalTime}
			/>
			<div className="info-block">
				<label className="info-block__label">Sound</label>
				<SoundSelect
					currentSound={currentSound}
					setCurrentSound={setCurrentSound}
				/>
			</div>
		</div>
	);
}

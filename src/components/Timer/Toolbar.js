export default function Toolbar({
	isStartShow,
	isPauseShow,
	start,
	play,
	pause,
	stop,
}) {
	return (
		<div className="mt-12 flex items-center justify-center gap-7">
			{isStartShow ? (
				<button
					title="Start (p)"
					className="btn btn_success w-full"
					onClick={start}
				>
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
					<button
						title="Stop (ESC)"
						className="btn btn_danger w-1/2"
						onClick={stop}
					>
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
						<button
							title="Pause (p)"
							className="btn btn_fancy w-1/2"
							onClick={pause}
						>
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
						<button
							title="Play (p)"
							className="btn btn_fancy w-1/2"
							onClick={play}
						>
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
	);
}

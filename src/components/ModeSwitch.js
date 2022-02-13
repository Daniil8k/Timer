import Switch from "./common/Switch";
import { useEffect } from "react";

export default function ModeSwitch({ isInfiniteMode, setIsInfiniteMode }) {
	const requestNotificationPermission = () => {
		if (!("Notification" in window)) {
			alert("This browser does not support desktop notification");
		} else if (
			Notification.permission !== "granted" ||
			Notification.permission !== "denied"
		) {
			Notification.requestPermission().then(function (permission) {
				if (permission === "denied") {
					alert(
						"You will not receive Notifications about the end of the Round until you turn it on in your Browser."
					);
				}
			});
		}
	};

	useEffect(() => {
		if (!isInfiniteMode) {
			requestNotificationPermission();
		}
	}, [isInfiniteMode]);

	return (
		<>
			<div className="tooltip">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="18px"
					fill="var(--color-primary)"
				>
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
				</svg>
				<div className="tooltip__text">
					{`Select the Timer Mode:
                      🐱‍👤: Stops each round and asks to continue,
                      🐱‍🏍: Does not stop at all and starts a new round`}
				</div>
			</div>
			<label
				title="Notification mode"
				htmlFor={isInfiniteMode ? "timer-mode" : ""}
				className={[isInfiniteMode ? "cursor-pointer" : ""]}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					fill={
						!isInfiniteMode ? "var(--color-primary)" : "var(--color-neutral)"
					}
				>
					<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
				</svg>
			</label>
			<Switch
				id="timer-mode"
				value={isInfiniteMode}
				setValue={setIsInfiniteMode}
			/>
			<label
				title="Infinite mode"
				htmlFor={!isInfiniteMode ? "timer-mode" : ""}
				className={[!isInfiniteMode ? "cursor-pointer" : ""]}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 20"
					height="24px"
					fill={
						isInfiniteMode ? "var(--color-primary)" : "var(--color-neutral)"
					}
				>
					<path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" />
				</svg>
			</label>
		</>
	);
}

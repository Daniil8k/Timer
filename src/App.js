import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import TimePicker from "./components/TimePicker";
import Switch from "./components/Switch";

function App() {
	const getBooleanFromLocalStorage = (key) =>
		localStorage.getItem(key) ? localStorage.getItem(key) === "true" : null;

	const [isInfiniteMode, setIsInfiniteMode] = useState(
		getBooleanFromLocalStorage("isInfiniteMode") ?? true
	);

	useEffect(() => {
		localStorage.setItem("isInfiniteMode", isInfiniteMode);
	}, [isInfiniteMode]);

	return (
		<div className="hamburger container">
			<header className="flex items-center justify-start gap-2">
				<img className="logo" width="32" height="32" src={logo} alt="logo" />
				<h1 className="italic mr-auto">Timer</h1>
				<label
					htmlFor="timer-mode"
					className="text-base cursor-pointer flex gap-2 items-center"
					title="Infinity mode"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						width="24px"
						viewBox="0 0 24 20"
						fill={isInfiniteMode ? 'var(--color-accent)' : 'var(--color-neutral)'}
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" />
					</svg>
					<span className={isInfiniteMode ? 'text-accent' : 'text-neutral'}>mode</span>
				</label>
				<Switch
					id="timer-mode"
					value={isInfiniteMode}
					setValue={setIsInfiniteMode}
				/>
			</header>
			<main>
				<TimePicker isInfiniteMode={isInfiniteMode} />
			</main>
			<footer className="text-sm text-right flex gap-4 justify-end items-center">
				<a
					className=" link"
					target="_blank"
					href="https://github.com/Daniil8k"
					rel="noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
					</svg>
					<span>Daniil8k</span>
				</a>
				<span>&copy; timer 2021</span>
			</footer>
		</div>
	);
}

export default App;

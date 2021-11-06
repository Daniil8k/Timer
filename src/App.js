import logo from "./assets/logo.webp";
import TimePicker from "./components/TimePicker";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="hamburger container">
				<header className="flex items-center justify-start gap-2">
					<img className="logo" width="32" height="32" src={logo} alt="logo" />
					<h1 className="italic">Timer</h1>
				</header>
				<main>
					<TimePicker />
				</main>
				<footer className="text-sm text-right">&copy; timer 2021</footer>
			</div>
		</div>
	);
}

export default App;

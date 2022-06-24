import Select from "@/components/common/Select";
import { playSound } from "@/utils/utils";

import bellSound from "@/sounds/bell.mp3";
import birdSound from "@/sounds/bird.wav";
import carSound from "@/sounds/car.wav";
import catSound from "@/sounds/cat.wav";
import dogSound from "@/sounds/dog.wav";
import doorbellSound from "@/sounds/doorbell.wav";
import horseSound from "@/sounds/horse.wav";
import lionSound from "@/sounds/lion.wav";
import notifySound from "@/sounds/notify.wav";
import roosterSound from "@/sounds/rooster.wav";
import serviceSound from "@/sounds/service.wav";
import toySound from "@/sounds/toy.wav";


const sounds = [
	{
		label: "Bell 🔔",
		value: bellSound,
	},
	{
		label: "Bird 🐦",
		value: birdSound,
	},
	{
		label: "Car 🚗",
		value: carSound,
	},
	{
		label: "Cat 🐱",
		value: catSound,
	},
	{
		label: "Dog 🐶",
		value: dogSound,
	},
	{
		label: "Doorbell🚪",
		value: doorbellSound,
	},
	{
		label: "Horse 🐴",
		value: horseSound,
	},
	{
		label: "Lion 🦁",
		value: lionSound,
	},
	{
		label: "Notify 📳",
		value: notifySound,
	},
	{
		label: "Rooster🐓",
		value: roosterSound,
	},
	{
		label: "Service 🛎",
		value: serviceSound,
	},
	{
		label: "Toy 🪀",
		value: toySound,
	},
];

export default function SoundSelect({ currentSound, setCurrentSound }) {
	const onChangeSound = (event) => {
		let value = event.target.value;

		localStorage.setItem("sound", value);
		setCurrentSound(value);
		playSound(value);
	};

	return (
		<Select options={sounds} onChange={onChangeSound} value={currentSound} />
	);
}

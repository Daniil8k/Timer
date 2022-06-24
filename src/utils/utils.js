// 1 -> '01', ..., 9 -> '09'
export const addLeadingZero = (num) => {
	if (num === -1) {
		return -1;
	}
	
	num = num.toString();
	if (num.length === 1) {
		num = "0" + num;
	}

	return num;
};

export const getTimeInSeconds = (time) => {
	return +time.h * 60 * 60 + +time.m * 60 + +time.s;
};

export const playSound = (sound) => {
	let audio = new Audio(sound);
	audio.play();
};

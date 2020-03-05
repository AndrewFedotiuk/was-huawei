export const percent = (cur, max) => {
	if (cur && max) return 100 / max * cur;
	else return 0
};

export const updateTime = (time) => {
	// time = time / 60).toFixed(2).toString().replace('.', ':');
	return timeConvert(time)
};

function timeConvert(num){
	const hours = Math.floor(num / 60);
	const minutes = (Math.floor(num % 60))
		.toString()
		.replace('.', '')
		.padStart(2,'0');
	return `${hours}:${minutes}`;
}

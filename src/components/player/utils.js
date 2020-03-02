export const percent = (cur, max) => {
	if (cur && max) return 100 / max * cur;
	else return 0
};

export const updateTime = (time) => {
	time = (time / 60).toFixed(2).toString().replace('.', ':');
	return time
};

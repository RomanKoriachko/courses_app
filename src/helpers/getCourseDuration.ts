export function getCourseDuration(duration: number) {
	const minutes = duration % 60 === 0 ? '00' : duration % 60;
	if (duration < 60) {
		return `${duration} minutes`;
	} else if (Math.floor(duration / 60) === 1) {
		return `0${Math.floor(duration / 60)}:${minutes} hour`;
	} else if (Math.floor(duration / 60) < 10) {
		return `0${Math.floor(duration / 60)}:${minutes} hours`;
	} else {
		return `${Math.floor(duration / 60)}:${minutes} hours`;
	}
}

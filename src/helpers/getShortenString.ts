export function getShortenString(string: string) {
	if (string.length > 32) {
		const newString = string.slice(0, 32) + '...';
		return newString;
	} else {
		return string;
	}
}

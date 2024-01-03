export function formatCreationDate(date: string) {
	const newStr = date.replace(/\//g, '.');
	const arr = newStr.split('.');
	const result = arr
		.map((element) => (element.length < 2 ? '0' + element : element))
		.join('.');
	return result;
}

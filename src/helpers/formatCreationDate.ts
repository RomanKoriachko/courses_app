export function formatCreationDate(date: string) {
	const result = date.replace(/\//g, '.');
	return result;
}

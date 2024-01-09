import { ERROR_MESSAGE } from 'src/constants';

export async function getData(
	link: string,
	headersObj?: { Authorization: string }
) {
	try {
		const response = await fetch(link, {
			method: 'GET',
			headers: headersObj,
		});
		const result = await response.json();
		const data = result.result;
		return data;
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

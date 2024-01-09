import { ERROR_MESSAGE } from 'src/constants';

export async function getData(
	link: string,
	method: string,
	headersObj?: { Authorization: string }
) {
	try {
		const response = await fetch(link, {
			method: method,
			headers: headersObj,
		});
		if (response.ok && method === 'DELETE') {
			console.log('DELETE request was successful');
		}
		const result = await response.json();
		const data = result.result;
		return data;
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

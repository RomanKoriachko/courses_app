import { ERROR_MESSAGE } from 'src/constants';

export async function getDataFromServer(link: string, method: string) {
	try {
		const response = await fetch(link, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

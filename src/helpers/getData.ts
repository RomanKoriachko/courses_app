import { ERROR_MESSAGE } from 'src/constants';

export async function getData(link: string) {
	try {
		const response = await fetch(link, {
			method: 'GET',
		});
		const result = await response.json();
		const data = result.result;
		return data;
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

import { ERROR_MESSAGE } from 'src/constants';

export async function getDataFromServer(
	link: string,
	method: string,
	token?: string
) {
	try {
		const response = await fetch(link, {
			method: method,
			headers: {
				Authorization: token,
			},
		});
		if (method !== 'DELETE') {
			const result = await response.json();
			const data = result.result;
			return data;
		}
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

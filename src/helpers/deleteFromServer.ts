import { ERROR_MESSAGE } from 'src/constants';

export async function deleteFromServer(
	link: string,
	headersObj?: { Authorization: string }
) {
	try {
		const response = await fetch(link, {
			method: 'DELETE',
			headers: headersObj,
		});
		if (response.ok) {
			console.log('DELETE request was successful');
		}
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

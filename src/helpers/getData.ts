export async function getData(link: string) {
	try {
		const response = await fetch(link, {
			method: 'GET',
		});
		const result = await response.json();
		const data = result.result;
		return data;
	} catch (error) {
		console.error('Error while receiving data from the server:', error);
	}
}

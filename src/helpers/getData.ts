// type CoursesArrType = {
// 	id: string;
// 	title: string;
// 	description: string;
// 	creationDate: string;
// 	duration: number;
// 	authors: string[];
// };

export async function getData(link: string) {
	try {
		const response = await fetch(link, {
			method: 'GET',
		});
		const result = await response.json();
		const data = result.result;
		return data;
	} catch (error) {
		console.error(error);
	}
}

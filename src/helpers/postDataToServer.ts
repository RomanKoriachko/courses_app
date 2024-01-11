import { ERROR_MESSAGE } from 'src/constants';

type CourseType = {
	title: string;
	description: string;
	duration: number;
	authors: string[];
};

type AuthorType = {
	name: string;
};

export async function postDataToServer(
	link: string,
	method: string,
	userData: CourseType | AuthorType,
	userToken: string
) {
	try {
		await fetch(link, {
			method: method,
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
				Authorization: userToken,
			},
		});
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

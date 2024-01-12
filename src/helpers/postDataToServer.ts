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

type LoginDataType = {
	password: string;
	email: string;
};

export async function postDataToServer(
	link: string,
	method: string,
	userData: CourseType | AuthorType | LoginDataType,
	userToken?: string
) {
	try {
		const response = await fetch(link, {
			method: method,
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
				Authorization: userToken,
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

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
	userData: CourseType | AuthorType,
	userToken: string
) {
	try {
		await fetch(link, {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
				Authorization: userToken,
			},
		});
		// console.log(response);
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
}

import { NavigateFunction } from 'react-router-dom';

type UserType = {
	name?: string;
	password: string;
	email: string;
};

export async function fetchData(
	link: string,
	userData: UserType,
	navigate: NavigateFunction,
	navigationLink: string
) {
	try {
		const response = await fetch(link, {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);

		if (result.successful) {
			navigate(navigationLink);
		}
		if (result.successful && link === 'http://localhost:4000/login') {
			const user = JSON.stringify(result);
			localStorage.setItem('loginData', user);
		}

		return result;
	} catch (error) {
		console.log(error);
	}
}

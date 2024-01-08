import { ERROR_MESSAGE } from 'src/constants';

type UserType = {
	name?: string;
	password: string;
	email: string;
};

export async function fetchUserData(
	link: string,
	userData: UserType,
	setErrorState: React.Dispatch<React.SetStateAction<boolean>>
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
		setErrorState(false);

		return result;
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
		setErrorState(true);
	}
}

import React, { useState } from 'react';

import { Form } from 'src/common';
import { postDataToServer } from 'src/helpers';
import { useNavigate } from 'react-router-dom';
import { SERVER_REGISTRATION_LINK } from 'src/constants';

import './Registration.scss';
import { useAppSelector } from 'src/store';

type UserType = {
	name: string;
	password: string;
	email: string;
};

const Registration = () => {
	// Changing inputs in Registration form

	const [newUser, setNewUser] = useState<UserType>({
		name: '',
		password: '',
		email: '',
	});

	function changeName(e: React.ChangeEvent<HTMLInputElement>) {
		setNewUser((prevState: UserType) => ({
			...prevState,
			name: e.target.value,
		}));
	}
	function changeEmail(e: React.ChangeEvent<HTMLInputElement>) {
		setNewUser((prevState: UserType) => ({
			...prevState,
			email: e.target.value,
		}));
	}
	function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setNewUser((prevState: UserType) => ({
			...prevState,
			password: e.target.value,
		}));
	}

	//  Submit Registration function

	const navigate = useNavigate();

	async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		postDataToServer(SERVER_REGISTRATION_LINK, 'POST', newUser);
		const response = await postDataToServer(
			SERVER_REGISTRATION_LINK,
			'POST',
			newUser
		);
		if (response.successful) {
			navigate('/login');
		} else {
			response.errors.forEach((element) => {
				alert(`${element}`);
			});
		}
	}

	const errorState = useAppSelector((state) => state.errorState);

	return (
		<div className='registration'>
			{errorState ? (
				<p className='registration-error'>Sorry, Registration failed!</p>
			) : (
				<Form
					formTitle='Registration'
					formAction={SERVER_REGISTRATION_LINK}
					nameInput={true}
					isRegistration={true}
					onFormSubmit={onFormSubmit}
					changeName={changeName}
					changeEmail={changeEmail}
					changePassword={changePassword}
					userData={newUser}
				/>
			)}
		</div>
	);
};

export default Registration;

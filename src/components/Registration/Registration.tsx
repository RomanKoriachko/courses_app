import React, { useState } from 'react';

import { Form } from 'src/common';
import { fetchData } from 'src/helpers';
import { useNavigate } from 'react-router-dom';

import './Registration.scss';

type UserType = {
	name: string;
	password: string;
	email: string;
};

const Registration = () => {
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

	const navigate = useNavigate();

	function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		fetchData('http://localhost:4000/register', newUser, navigate, '/login');
	}

	return (
		<div className='registration'>
			<Form
				formTitle='Registration'
				formAction='http://localhost:4000/register'
				nameInput={true}
				isRegistration={true}
				onFormSubmit={onFormSubmit}
				changeName={changeName}
				changeEmail={changeEmail}
				changePassword={changePassword}
				userData={newUser}
			/>
		</div>
	);
};

export default Registration;

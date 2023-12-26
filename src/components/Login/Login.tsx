import React, { useState } from 'react';

import { Form } from 'src/common';
import { fetchData } from 'src/helpers';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

type LoginDataType = {
	password: string;
	email: string;
};

const Login = () => {
	const [loginData, setLoginData] = useState<LoginDataType>({
		password: '',
		email: '',
	});

	function changeEmail(e: React.ChangeEvent<HTMLInputElement>) {
		setLoginData((prevState: LoginDataType) => ({
			...prevState,
			email: e.target.value,
		}));
	}
	function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setLoginData((prevState: LoginDataType) => ({
			...prevState,
			password: e.target.value,
		}));
	}

	const navigate = useNavigate();

	async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await fetchData(
			'http://localhost:4000/login',
			loginData,
			navigate,
			'/courses'
		);
	}

	return (
		<div className='login'>
			<Form
				formTitle='Login'
				formAction='http://localhost:4000/login'
				nameInput={false}
				isRegistration={false}
				onFormSubmit={onFormSubmit}
				changeEmail={changeEmail}
				changePassword={changePassword}
				userData={loginData}
			/>
		</div>
	);
};

export default Login;

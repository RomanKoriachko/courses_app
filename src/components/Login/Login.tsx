import React, { useState } from 'react';

import { Form } from 'src/common';
import { fetchData } from 'src/helpers';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

type LoginDataType = {
	password: string;
	email: string;
};

type Props = {
	errorState: boolean;
	setErrorState(arg: boolean): void;
};

const Login = ({ errorState, setErrorState }: Props) => {
	// Changing inputs in Login form

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

	//  Submit Login function

	const navigate = useNavigate();

	async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await fetchData(
			'http://localhost:4000/login',
			loginData,
			navigate,
			'/courses',
			setErrorState
		);
	}

	return (
		<div className='login'>
			{errorState ? (
				<p className='login-error'>Sorry, Login is failed!</p>
			) : (
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
			)}
		</div>
	);
};

export default Login;

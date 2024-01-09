import React, { useEffect, useState } from 'react';

import { Form } from 'src/common';
import { fetchUserData } from 'src/helpers';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import { SERVER_LOGIN_LINK } from 'src/constants';
import { getCurrentUser } from 'src/store/user/thunk';

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

	const userState = useAppSelector((state) => state.users);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const response = await fetchUserData(
			SERVER_LOGIN_LINK,
			loginData,
			setErrorState
		);
		if (response.successful) {
			await dispatch(getCurrentUser(response.result));
		} else {
			alert(`${response.result}`);
		}
	}

	useEffect(() => {
		if (userState.isAuth) {
			const user = JSON.stringify(userState);
			localStorage.setItem('loginData', user);
			navigate('/courses');
		}
	}, [userState.isAuth]);

	return (
		<div className='login'>
			{errorState ? (
				<p className='login-error'>Sorry, Login is failed!</p>
			) : (
				<Form
					formTitle='Login'
					formAction={SERVER_LOGIN_LINK}
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

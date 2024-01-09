import React, { useEffect, useState } from 'react';

import { Form } from 'src/common';
import { fetchUserData } from 'src/helpers';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import { addUserAction } from 'src/store/user/actions';
import { SERVER_LOGIN_LINK } from 'src/constants';

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
	const dispatch = useAppDispatch();
	const userState = useAppSelector((state) => state.users);

	async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newUserObj = {
			isAuth: false,
			name: '',
			email: '',
			token: '',
		};
		const response = await fetchUserData(
			SERVER_LOGIN_LINK,
			loginData,
			setErrorState
		);
		if (response.successful) {
			newUserObj.isAuth = true;
			newUserObj.name = response.user.name;
			newUserObj.email = response.user.email;
			newUserObj.token = response.result;
			dispatch(addUserAction(newUserObj));
		} else {
			alert(`${response.result}`);
		}
	}

	useEffect(() => {
		console.log(userState);
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

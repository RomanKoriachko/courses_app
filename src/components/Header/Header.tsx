import React from 'react';

import { Logo } from '../Header/components';
import { Button } from '../../common';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/store';
import { logoutUser } from 'src/store/user/thunk';

import './Header.scss';

const Header = () => {
	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const dispatch = useAppDispatch();
	const navigation = useNavigate();

	async function onLogoutClick() {
		await dispatch(logoutUser(localUserData.token));
		navigation('/login');
	}

	const location = useLocation();

	return (
		<header className='header'>
			<div className='container'>
				<div className='header-row'>
					<Logo />
					{location.pathname === '/login' ||
					location.pathname === '/registration' ? undefined : localUserData &&
					  localUserData.isAuth ? (
						<div className='header-name-and-btn-row'>
							<p>{localUserData.name}</p>
							<Button buttonText={'logout'} onClick={onLogoutClick} />
						</div>
					) : (
						<div className='header-name-and-btn-row'>
							<Button buttonText={'login'} />
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

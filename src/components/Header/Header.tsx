import React from 'react';

import { Logo } from '../Header/components';
import { Button } from '../../common';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import { deleteUserAction } from 'src/store/user/actions';

import './Header.scss';

const Header = () => {
	const userState = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();
	const navigation = useNavigate();

	function onLogoutClick() {
		localStorage.removeItem('loginData');
		dispatch(deleteUserAction());
		navigation('/login');
	}

	const location = useLocation();

	return (
		<header className='header'>
			<div className='container'>
				<div className='header-row'>
					<Logo />
					{location.pathname === '/login' ||
					location.pathname ===
						'/registration' ? undefined : userState.successful ? (
						<div className='header-name-and-btn-row'>
							<p>{userState.user.name}</p>
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

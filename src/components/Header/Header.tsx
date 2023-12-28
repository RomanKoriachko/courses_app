import React from 'react';

import { Logo } from '../Header/components';
import { Button } from '../../common';

import './Header.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const navigation = useNavigate();
	function onLogoutClick() {
		localStorage.removeItem('loginData');
		navigation('/login');
	}

	const location = useLocation();

	return (
		<header className='header'>
			<div className='container'>
				<div className='header-row'>
					<Logo />
					{location.pathname === '/login' ||
					location.pathname === '/registration' ? undefined : localUserData ? (
						<div className='header-name-and-btn-row'>
							<p>{localUserData.user.name}</p>
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

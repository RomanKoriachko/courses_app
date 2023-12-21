import React from 'react';

import { Logo } from '../Header/components';
import { Button } from '../../common';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-row'>
					<Logo />
					<Button buttonText={'login'} />
				</div>
			</div>
		</header>
	);
};

export default Header;

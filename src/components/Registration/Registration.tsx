import React from 'react';

import './Registration.scss';
import { Button, Input } from 'src/common';

const Registration = () => {
	return (
		<div className='registration'>
			<div className='container'>
				<p className='registration-title'>Registration</p>
				<form className='registartion-form'>
					<div className='form-element'>
						<label htmlFor='registration-name'>Name</label>
						<Input id='registration-name' type='text' />
					</div>
					<div className='form-element'>
						<label htmlFor='registration-email'>Email</label>
						<Input id='registration-email' type='email' />
					</div>
					<div className='form-element'>
						<label htmlFor='registration-password'>Password</label>
						<Input id='registration-password' type='password' />
					</div>
					<Button buttonText='Login' />
					<p>If you have an account you may Login</p>
				</form>
			</div>
		</div>
	);
};

export default Registration;

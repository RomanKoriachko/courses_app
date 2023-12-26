import React from 'react';

import './Registration.scss';
import { Button, Input } from 'src/common';
import { checkInputValidation } from 'src/helpers';

const Registration = () => {
	function onFormSubmit() {
		checkInputValidation('registration-input', 'validation-message');
	}

	return (
		<div className='registration'>
			<div className='container'>
				<p className='registration-title'>Registration</p>
				<form className='registartion-form'>
					<div className='form-element'>
						<label htmlFor='registration-name'>Name</label>
						<Input
							id='registration-name'
							type='text'
							required={true}
							classname='registration'
						/>
						<p className='validation-message'>Name is required.</p>
					</div>
					<div className='form-element'>
						<label htmlFor='registration-email'>Email</label>
						<Input
							id='registration-email'
							type='email'
							required={true}
							classname='registration'
						/>
						<p className='validation-message'>Email is required.</p>
					</div>
					<div className='form-element'>
						<label htmlFor='registration-password'>Password</label>
						<Input
							id='registration-password'
							type='password'
							required={true}
							classname='registration'
						/>
						<p className='validation-message'>Password is required.</p>
					</div>
					<Button buttonText='Login' onClick={onFormSubmit} />
					<p>If you have an account you may Login</p>
				</form>
			</div>
		</div>
	);
};

export default Registration;

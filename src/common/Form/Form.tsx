import React from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import './Form.scss';
import { Link } from 'react-router-dom';

type Props = {
	formTitle: string;
	nameInput: boolean;
	isRegistration: boolean;
	onFormSubmit(): void;
};

const Form = ({
	formTitle,
	nameInput,
	isRegistration,
	onFormSubmit,
}: Props) => {
	return (
		<>
			<p className='form-title'>{formTitle}</p>
			<form className='form'>
				{nameInput ? (
					<div className='form-element'>
						<label htmlFor='form-element-name'>Name</label>
						<Input
							id='form-element-name'
							type='text'
							required={true}
							classname='form-element'
						/>
						<p className='validation-message'>Name is required.</p>
					</div>
				) : null}
				<div className='form-element'>
					<label htmlFor='form-element-email'>Email</label>
					<Input
						id='form-element-email'
						type='email'
						required={true}
						classname='form-element'
					/>
					<p className='validation-message'>Email is required.</p>
				</div>
				<div className='form-element'>
					<label htmlFor='form-element-password'>Password</label>
					<Input
						id='form-element-password'
						type='password'
						required={true}
						classname='form-element'
					/>
					<p className='validation-message'>Password is required.</p>
				</div>
				<Button buttonText='Login' onClick={onFormSubmit} />
				{isRegistration ? (
					<p className='form-link'>
						If you have an account you may <Link to='/login'>Login</Link>
					</p>
				) : (
					<p className='form-link'>
						If you don't have an account you may{' '}
						<Link to='/'>Registration</Link>
					</p>
				)}
			</form>
		</>
	);
};

export default Form;

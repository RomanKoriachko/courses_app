import React from 'react';

import { Input } from '../Input';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { checkInputValidation } from 'src/helpers';

import './Form.scss';

type Props = {
	formTitle: string;
	formAction: string;
	nameInput: boolean;
	isRegistration: boolean;
	onFormSubmit(e: React.FormEvent<HTMLFormElement>): void;
	changeName?(e: React.ChangeEvent<HTMLInputElement>): void;
	changeEmail(e: React.ChangeEvent<HTMLInputElement>): void;
	changePassword(e: React.ChangeEvent<HTMLInputElement>): void;
	userData: {
		name?: string;
		email: string;
		password: string;
	};
};

const Form = ({
	formTitle,
	formAction,
	nameInput,
	isRegistration,
	onFormSubmit,
	changeName,
	changeEmail,
	changePassword,
	userData,
}: Props) => {
	return (
		<>
			<p className='form-title'>{formTitle}</p>
			<form
				className='form'
				action={formAction}
				method='POST'
				onSubmit={onFormSubmit}
			>
				{nameInput ? (
					<div className='form-element'>
						<label htmlFor='form-element-name'>Name</label>
						<Input
							id='form-element-name'
							type='text'
							required={true}
							classname='form-element'
							onChange={changeName}
							value={userData.name}
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
						onChange={changeEmail}
						value={userData.email}
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
						onChange={changePassword}
						value={userData.password}
					/>
					<p className='validation-message'>Password is required.</p>
				</div>
				<div
					onClick={() =>
						checkInputValidation('form-element-input', 'validation-message')
					}
				>
					<Button buttonText='Login' onClick={() => onFormSubmit} />
				</div>
				{isRegistration ? (
					<p className='form-link'>
						If you have an account you may <Link to='/login'>Login</Link>
					</p>
				) : (
					<p className='form-link'>
						If you don't have an account you may{' '}
						<Link to='/registration'>Registration</Link>
					</p>
				)}
			</form>
		</>
	);
};

export default Form;

import React from 'react';

import './Login.scss';
import { Form } from 'src/common';
import { checkInputValidation } from 'src/helpers';

const Login = () => {
	function onFormSubmit() {
		checkInputValidation('form-element-input', 'validation-message');
	}

	return (
		<div className='login'>
			<Form
				formTitle='Login'
				nameInput={false}
				isRegistration={false}
				onFormSubmit={onFormSubmit}
			/>
		</div>
	);
};

export default Login;

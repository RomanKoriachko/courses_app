import React from 'react';

import { Form } from 'src/common';
import { checkInputValidation } from 'src/helpers';

import './Registration.scss';

const Registration = () => {
	function onFormSubmit() {
		checkInputValidation('form-element-input', 'validation-message');
	}

	return (
		<div className='registration'>
			<Form
				formTitle='Registration'
				nameInput={true}
				isRegistration={true}
				onFormSubmit={onFormSubmit}
			/>
		</div>
	);
};

export default Registration;

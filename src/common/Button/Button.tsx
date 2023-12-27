import React from 'react';

import './Button.scss';

type Props = {
	buttonText: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?(): void;
};

const Button = ({ buttonText, type, onClick }: Props) => (
	<button className='button' onClick={onClick} type={type}>
		{buttonText}
	</button>
);

export default Button;

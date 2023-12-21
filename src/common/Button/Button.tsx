import React from 'react';
import './Button.scss';

type Props = { buttonText: string; onClick?(): void };

const Button = ({ buttonText, onClick }: Props) => {
	return (
		<button className='button' onClick={onClick}>
			{buttonText}
		</button>
	);
};

export default Button;

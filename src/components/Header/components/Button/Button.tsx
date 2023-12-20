import React from 'react';
import './Button.scss';

type Props = { buttonText: string };

const Button = ({ buttonText }: Props) => {
	return <button className='button'>{buttonText}</button>;
};

export default Button;

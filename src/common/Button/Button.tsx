import React from 'react';

import './Button.scss';

type Props = {
	buttonText: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?(): void;
	className?: string;
};

const Button = ({ buttonText, type, onClick, className }: Props) => (
	<button
		className={className ? `button ${className}-button` : 'button'}
		onClick={onClick}
		type={type}
	>
		{buttonText}
	</button>
);

export default Button;

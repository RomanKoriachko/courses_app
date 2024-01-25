import React from 'react';

import './Button.scss';

type Props = {
	buttonText: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?(): void;
	className?: string;
	isDisable?: boolean;
};

const Button = ({ buttonText, type, onClick, className, isDisable }: Props) => (
	<button
		className={className ? `button ${className}-button` : 'button'}
		onClick={onClick}
		type={type}
		disabled={isDisable}
	>
		{buttonText}
	</button>
);

export default Button;

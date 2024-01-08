import React from 'react';

import './Input.scss';

type Props = {
	onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
	value?: string;
	id?: string;
	type: string;
	required?: boolean;
	classname: string;
};

const Input = ({ onChange, value, id, type, required, classname }: Props) => (
	<input
		required={required}
		id={id}
		className={`input ${classname}-input`}
		type={type}
		placeholder='Input text'
		onChange={onChange}
		value={value}
	/>
);

export default Input;

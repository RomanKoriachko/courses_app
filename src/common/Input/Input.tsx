import React from 'react';

import './Input.scss';

type Props = {
	onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
	value?: string;
	id?: string;
	type: string;
};

const Input = ({ onChange, value, id, type }: Props) => (
	<input
		id={id}
		className='input'
		type={type}
		placeholder='Input text'
		onChange={onChange}
		value={value}
	/>
);

export default Input;

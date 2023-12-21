import React from 'react';
import './Input.scss';

type Props = {
	onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
	value: string;
};

const Input = ({ onChange, value }: Props) => {
	return (
		<input
			className='input'
			type='text'
			placeholder='Input text'
			onChange={onChange}
			value={value}
		/>
	);
};

export default Input;

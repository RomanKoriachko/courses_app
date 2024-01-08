import React from 'react';

import './InputAndLabel.scss';

type Props = {
	labelText: string;
	required: boolean;
	placeholderText: string;
	type: string;
	pattern?: string;
	minValue?: number;
	value?: string | number;
	onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputAndLabel = ({
	labelText,
	required,
	placeholderText,
	type,
	pattern,
	minValue,
	value,
	onChange,
}: Props) => {
	return (
		<div className='input-and-label'>
			<label htmlFor={`${labelText}-input`}>{labelText}</label>
			<input
				className='create-course-input'
				required={required}
				id={`${labelText}-input`}
				type={type}
				placeholder={placeholderText}
				onChange={onChange}
				minLength={2}
				pattern={pattern}
				min={minValue}
				value={value}
			/>
		</div>
	);
};

export default InputAndLabel;

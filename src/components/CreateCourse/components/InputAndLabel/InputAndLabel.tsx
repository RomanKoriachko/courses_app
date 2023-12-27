import React from 'react';

import './InputAndLabel.scss';

type Props = {
	labelText: string;
	placeholderText: string;
	onChange?(): void;
};

const InputAndLabel = ({ labelText, placeholderText, onChange }: Props) => {
	return (
		<div className='input-and-label'>
			<label htmlFor={`${labelText}-input`}>{labelText}</label>
			<input
				id={`${labelText}-input`}
				type='text'
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputAndLabel;

import React from 'react';

import './AuthorItem.scss';

type Props = {
	id: string;
	author: string;
	onDeliteClick?(id: string): void;
	onAddClick?(id: string): void;
	isDisable?: boolean;
};

const AuthorItem = ({
	id,
	author,
	onDeliteClick,
	onAddClick,
	isDisable,
}: Props) => {
	return (
		<div className='author-item'>
			<div>{author}</div>
			<button
				className='author-item-icon author-item-icon-add'
				type='button'
				onClick={() => onAddClick(id)}
			></button>
			<button
				disabled={isDisable}
				className='author-item-icon author-item-icon-delite'
				type='button'
				onClick={() => onDeliteClick(id)}
			></button>
		</div>
	);
};

export default AuthorItem;

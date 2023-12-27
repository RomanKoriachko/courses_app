import React from 'react';

import './AuthorItem.scss';

type Props = {
	author: string;
};

const AuthorItem = ({ author }: Props) => {
	return (
		<div className='author-item'>
			<div>{author}</div>
			<button
				className='author-item-icon author-item-icon-add'
				type='button'
			></button>
			<button
				className='author-item-icon author-item-icon-delite'
				type='button'
			></button>
		</div>
	);
};

export default AuthorItem;

import React from 'react';

import './AuthorItem.scss';

type Props = {
	id: string;
	author: string;
	authorsList: {
		id: string;
		name: string;
	}[];
	setAuthorsList(
		value: {
			id: string;
			name: string;
		}[]
	): void;
};

const AuthorItem = ({ id, author, authorsList, setAuthorsList }: Props) => {
	function deliteFromAuthorsList() {
		const updatedAuthorsList = authorsList.filter((author) => author.id !== id);
		setAuthorsList(updatedAuthorsList);
	}

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
				onClick={deliteFromAuthorsList}
			></button>
		</div>
	);
};

export default AuthorItem;

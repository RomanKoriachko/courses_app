import React from 'react';

import { Button, Input } from '../../../../common';
import { SEARCH_BUTTON_TEXT } from 'src/constants';

import './SearchBar.scss';

type Props = {
	searchInput: string;
	setSearchInput(searchInput: string): void;
	sortingCourses(): void;
};

const SearchBar = ({ searchInput, setSearchInput, sortingCourses }: Props) => {
	function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchInput(e.target.value);
	}

	return (
		<div className='search-bar'>
			<Input onChange={changeInput} value={searchInput} type='text' />
			<Button buttonText={SEARCH_BUTTON_TEXT} onClick={sortingCourses} />
		</div>
	);
};

export default SearchBar;

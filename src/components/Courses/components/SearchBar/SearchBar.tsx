import React from 'react';

import { Button, Input } from '../../../../common';
import { SEARCH_BUTTON_TEXT, mockedCoursesList } from 'src/constants';

import './SearchBar.scss';

type Props = {
	searchInput: string;
	setSearchInput(searchInput: string): void;
	sortingCourses(): void;
	setSortedCoursesArr(
		arr: {
			id: string;
			title: string;
			description: string;
			creationDate: string;
			duration: number;
			authors: string[];
		}[]
	): void;
};

const SearchBar = ({
	searchInput,
	setSearchInput,
	sortingCourses,
	setSortedCoursesArr,
}: Props) => {
	function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchInput(e.target.value);
		if (searchInput.length - 1 < 1) {
			setSortedCoursesArr(mockedCoursesList);
		}
	}

	return (
		<div className='search-bar'>
			<Input onChange={changeInput} value={searchInput} />
			<Button buttonText={SEARCH_BUTTON_TEXT} onClick={sortingCourses} />
		</div>
	);
};

export default SearchBar;

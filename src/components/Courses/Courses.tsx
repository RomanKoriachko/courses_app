import React, { useEffect, useState } from 'react';

import { CourseCard, SearchBar } from './components';
import { mockedCoursesList } from 'src/constants';

type Props = {
	getChosenCourseId(courceId: string): void;
};

const Courses = ({ getChosenCourseId }: Props) => {
	const [searchInput, setSearchInput] = useState<string>('');
	const [sortedCoursesArr, setSortedCoursesArr] = useState(mockedCoursesList);

	function sortingCourses() {
		setSortedCoursesArr(
			mockedCoursesList.filter(
				(element) =>
					element.title.toLowerCase().includes(searchInput.toLowerCase()) ||
					element.id.toLowerCase().includes(searchInput.toLowerCase())
			)
		);
	}

	useEffect(() => {
		if (searchInput.length < 1) {
			setSortedCoursesArr(mockedCoursesList);
		}
	}, [searchInput.length]);

	return (
		<div className='courses'>
			<SearchBar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				sortingCourses={sortingCourses}
			/>
			{sortedCoursesArr.map(
				({ id, title, description, creationDate, duration, authors }) => (
					<React.Fragment key={id}>
						<CourseCard
							id={id}
							title={title}
							description={description}
							authors={authors}
							duration={duration}
							creationDate={creationDate}
							getChosenCourseId={getChosenCourseId}
						/>
					</React.Fragment>
				)
			)}
		</div>
	);
};

export default Courses;

import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from 'src/constants';
import SearchBar from './components/SearchBar/SearchBar';

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

	return (
		<div className='courses'>
			<SearchBar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				sortingCourses={sortingCourses}
				setSortedCoursesArr={setSortedCoursesArr}
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

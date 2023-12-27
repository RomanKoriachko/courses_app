import React, { useEffect, useState } from 'react';

import { CourseCard, SearchBar } from './components';
import { mockedCoursesList } from 'src/constants';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
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

	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const navigate = useNavigate();

	useEffect(() => {
		if (!localUserData) {
			navigate('/registration');
		}
	}, []);

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
							courseId={id}
							title={title}
							description={description}
							authors={authors}
							duration={duration}
							creationDate={creationDate}
						/>
					</React.Fragment>
				)
			)}
		</div>
	);
};

export default Courses;

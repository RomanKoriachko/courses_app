import React, { useEffect, useState } from 'react';

import { CourseCard, SearchBar } from './components';
// import { mockedCoursesList } from 'src/constants';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'src/common';

import './Courses.scss';

type CoursesArrType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

type Props = {
	sortedCoursesArr: CoursesArrType[];
	setSortedCoursesArr(arg: CoursesArrType[]): void;
};

const Courses = ({ sortedCoursesArr, setSortedCoursesArr }: Props) => {
	const [searchInput, setSearchInput] = useState<string>('');

	// function sortingCourses() {
	// 	setSortedCoursesArr(
	// 		mockedCoursesList.filter(
	// 			(element) =>
	// 				element.title.toLowerCase().includes(searchInput.toLowerCase()) ||
	// 				element.id.toLowerCase().includes(searchInput.toLowerCase())
	// 		)
	// 	);
	// }

	// useEffect(() => {
	// 	if (searchInput.length < 1) {
	// 		setSortedCoursesArr(mockedCoursesList);
	// 	}
	// }, [searchInput.length]);

	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const navigate = useNavigate();

	useEffect(() => {
		if (!localUserData) {
			navigate('/registration');
		}
	}, []);

	return (
		<div className='courses'>
			<div className='courses-row'>
				{/* <SearchBar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					sortingCourses={sortingCourses}
				/> */}
				<Link to={'/courses/add'}>
					<Button buttonText='Add new course' />
				</Link>
			</div>
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

import React, { useEffect, useState } from 'react';

import { CourseCard, SearchBar } from './components';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'src/common';
import { useAppSelector } from 'src/store/authors/types';
import { EmptyCourseList } from '../EmptyCourseList';

import './Courses.scss';

const Courses = () => {
	const coursesArrState = useAppSelector((state) => state.courses);
	const [filtredArrCourses, setFiltredArrCourses] = useState(coursesArrState);

	// Get actual courses

	useEffect(() => {
		setFiltredArrCourses(coursesArrState);
	}, [coursesArrState.length]);

	// Search

	const [searchInput, setSearchInput] = useState<string>('');

	function sortingCourses() {
		setFiltredArrCourses(
			coursesArrState.filter(
				(element) =>
					element.title.toLowerCase().includes(searchInput.toLowerCase()) ||
					element.id.toLowerCase().includes(searchInput.toLowerCase())
			)
		);
	}

	useEffect(() => {
		if (searchInput.length < 1) {
			setFiltredArrCourses(coursesArrState);
		}
	}, [searchInput.length]);

	// Check login state

	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const navigate = useNavigate();

	useEffect(() => {
		if (!localUserData) {
			navigate('/registration');
		}
	}, []);

	return (
		<>
			{filtredArrCourses.length < 1 ? (
				<EmptyCourseList />
			) : (
				<div className='courses'>
					<div className='courses-row'>
						<SearchBar
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							sortingCourses={sortingCourses}
						/>
						<Link to={'/courses/add'}>
							<Button buttonText='Add new course' />
						</Link>
					</div>
					{filtredArrCourses.map(
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
			)}
		</>
	);
};

export default Courses;

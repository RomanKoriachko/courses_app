import React, { useEffect, useState } from 'react';

import { CourseCard, SearchBar } from './components';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'src/common';
import { EmptyCourseList } from '../EmptyCourseList';
import { useAppDispatch, useAppSelector } from 'src/store';
import { fetchCoursesData } from 'src/store/courses/thunk';

import './Courses.scss';

const Courses = () => {
	const coursesArrState = useAppSelector((state) => state.courses);
	const dispatch = useAppDispatch();

	const [filtredArrCourses, setFiltredArrCourses] = useState(coursesArrState);

	// Get actual courses

	useEffect(() => {
		dispatch(fetchCoursesData());
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

	// Get current user data

	const userState = useAppSelector((state) => state.users);

	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const navigate = useNavigate();

	useEffect(() => {
		if (!localUserData) {
			navigate('/registration');
		}
	}, [localUserData]);

	const errorState = useAppSelector((state) => state.errorState);

	return (
		<>
			{errorState ? (
				<p>Sorry, an error occurred while loading data</p>
			) : filtredArrCourses.length < 1 ? (
				<EmptyCourseList />
			) : (
				<div className='courses'>
					<div className='courses-row'>
						<SearchBar
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							sortingCourses={sortingCourses}
						/>
						{userState && userState.role === 'admin' ? (
							<Link to={'/courses/add'}>
								<Button buttonText='Add new course' />
							</Link>
						) : undefined}
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

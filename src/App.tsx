import React, { useState, useEffect } from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	Registration,
	Login,
	CreateCourse,
} from './components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import { getData } from './helpers';
import { saveCoursesAction } from './store/courses/actions';
import { saveAuthorsAction } from './store/authors/actions';
import { useAppDispatch, useAppSelector } from './store';
import { setErrorStateAction } from './store/errorState/actions';

function App() {
	const coursesErrorState = useAppSelector((state) => state.errorState);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchDataFromServer = async () => {
			try {
				const coursesResult = await getData(
					'http://localhost:4000/courses/all'
				);
				dispatch(saveCoursesAction(coursesResult));
				const AuthorsResult = await getData(
					'http://localhost:4000/authors/all'
				);
				dispatch(saveAuthorsAction(AuthorsResult));
				dispatch(setErrorStateAction(false));
			} catch (error) {
				console.error('Error while receiving data from the server:', error);
				dispatch(setErrorStateAction(true));
				return [];
			}
		};
		fetchDataFromServer();
	}, []);

	const [errorState, setErrorState] = useState<boolean>(false);
	return (
		<>
			<BrowserRouter>
				<Header />
				<main className='main'>
					<div className='small-container'>
						<Routes>
							<Route path='/' element={<Navigate to='/courses' />} />
							<Route
								path='/registration'
								element={
									<Registration
										errorState={errorState}
										setErrorState={setErrorState}
									/>
								}
							/>
							<Route
								path='/login'
								element={
									<Login
										errorState={errorState}
										setErrorState={setErrorState}
									/>
								}
							/>
							{coursesErrorState ? (
								<Route
									path='/courses'
									element={
										<p className='error-message'>
											Sorry, there was an error loading the course list
										</p>
									}
								/>
							) : (
								<Route path='/courses' element={<Courses />} />
							)}
							<Route path='/courses/:courseId' element={<CourseInfo />} />
							<Route path='/courses/add' element={<CreateCourse />} />
							<Route path='*' element={<Navigate to='/courses' />} />
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

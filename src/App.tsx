import React, { useState, useEffect } from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	Registration,
	Login,
	CourseForm,
} from './components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { getData } from './helpers';
import { saveCoursesAction } from './store/courses/actions';
import { saveAuthorsAction } from './store/authors/actions';
import { useAppDispatch, useAppSelector } from './store';
import { setErrorStateAction } from './store/errorState/actions';
import { addUserAction } from './store/user/actions';
import { AUTHORS_LIST, COURSES_LIST, ERROR_MESSAGE } from './constants';

import './App.scss';

function App() {
	const coursesErrorState = useAppSelector((state) => state.errorState);
	const dispatch = useAppDispatch();

	// Get courses from server

	useEffect(() => {
		const fetchDataFromServer = async () => {
			try {
				const coursesResult = await getData(COURSES_LIST);
				dispatch(saveCoursesAction(coursesResult));
				const AuthorsResult = await getData(AUTHORS_LIST);
				dispatch(saveAuthorsAction(AuthorsResult));
				dispatch(setErrorStateAction(false));
			} catch (error) {
				console.error(ERROR_MESSAGE, error);
				dispatch(setErrorStateAction(true));
				return [];
			}
		};
		fetchDataFromServer();
	}, []);

	// Check local state and save data in store

	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	useEffect(() => {
		if (localUserData && localUserData.isAuth) {
			dispatch(addUserAction(localUserData));
		}
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
							<Route path='/courses/add' element={<CourseForm />} />
							<Route path='*' element={<Navigate to='/courses' />} />
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

import React, { useEffect } from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	Registration,
	Login,
	CourseForm,
	PrivateRoute,
} from './components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { addUserAction } from './store/user/actions';
import { fetchCoursesData } from './store/courses/thunk';
import { fetchAuthorsData } from './store/authors/thunk';

import './App.scss';

function App() {
	const coursesErrorState = useAppSelector((state) => state.errorState);
	const dispatch = useAppDispatch();

	// Get Courses and Authors data

	useEffect(() => {
		dispatch(fetchCoursesData());
		dispatch(fetchAuthorsData());
	}, []);

	// Check local state and save data in store

	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	useEffect(() => {
		if (localUserData && localUserData.isAuth) {
			dispatch(addUserAction(localUserData));
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<Header />
				<main className='main'>
					<div className='small-container'>
						<Routes>
							<Route path='/' element={<Navigate to='/courses' />} />
							<Route path='/registration' element={<Registration />} />
							<Route path='/login' element={<Login />} />
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
							<Route
								path='/courses/add'
								element={
									<PrivateRoute>
										<CourseForm />
									</PrivateRoute>
								}
							/>
							<Route
								path='/courses/update/:courseId'
								element={
									<PrivateRoute>
										<CourseForm />
									</PrivateRoute>
								}
							/>
							<Route path='*' element={<Navigate to='/courses' />} />
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

import React, { useState, useEffect } from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	EmptyCourseList,
	Registration,
	Login,
	CreateCourse,
} from './components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import { getData } from './helpers';
import { useAppDispatch, useAppSelector } from './store/courses/types';
import { saveCoursesAction } from './store/courses/actions';

type CoursesArrType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

function App() {
	const [sortedCoursesArr, setSortedCoursesArr] = useState([]);

	const dispatch = useAppDispatch();

	const arr = useAppSelector((state) => state.courses);
	console.log(arr);

	useEffect(() => {
		const fetchDataFromServer = async () => {
			try {
				const result = await getData('http://localhost:4000/courses/all');
				dispatch(saveCoursesAction(result));
			} catch (error) {
				console.error('Помилка при отриманні даних з сервера:', error);
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
							<Route
								path='/courses'
								element={
									<>
										{/* {mockedCoursesList.length < 1 ? (
												<EmptyCourseList />
											) : (
												<Courses
													sortedCoursesArr={sortedCoursesArr}
													setSortedCoursesArr={setSortedCoursesArr}
												/>
											)} */}
									</>
								}
							/>
							<Route path='/courses/:courseId' element={<CourseInfo />} />
							{/* <Route
									path='/courses/add'
									element={
										<CreateCourse
											sortedCoursesArr={sortedCoursesArr}
											setSortedCoursesArr={setSortedCoursesArr}
										/>
									}
								/> */}
							<Route path='*' element={<Navigate to='/courses' />} />
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

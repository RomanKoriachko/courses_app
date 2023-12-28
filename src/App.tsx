import React, { useState } from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	EmptyCourseList,
	Registration,
	Login,
	CreateCourse,
} from './components';
import { mockedCoursesList } from './constants';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
	const [sortedCoursesArr, setSortedCoursesArr] = useState(mockedCoursesList);
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
							<Route
								path='/courses'
								element={
									<>
										{mockedCoursesList.length < 1 ? (
											<EmptyCourseList />
										) : (
											<Courses
												sortedCoursesArr={sortedCoursesArr}
												setSortedCoursesArr={setSortedCoursesArr}
											/>
										)}
									</>
								}
							/>
							<Route path='/courses/:courseId' element={<CourseInfo />} />
							<Route
								path='/courses/add'
								element={
									<CreateCourse
										sortedCoursesArr={sortedCoursesArr}
										setSortedCoursesArr={setSortedCoursesArr}
									/>
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

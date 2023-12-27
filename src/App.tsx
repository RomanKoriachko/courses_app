import React from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	EmptyCourseList,
	Registration,
	Login,
} from './components';
import { mockedCoursesList } from './constants';

import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
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
											<Courses />
										)}
									</>
								}
							/>
							<Route path='/courses/:courseId' element={<CourseInfo />} />
							<Route path='*' element={<Navigate to='/courses' />} />
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

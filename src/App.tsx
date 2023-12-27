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
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main className='main'>
					<div className='small-container'>
						<Routes>
							<Route path='*' element={<Registration />} />
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
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

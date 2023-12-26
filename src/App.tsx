import React, { useState } from 'react';

import {
	Header,
	Courses,
	CourseInfo,
	EmptyCourseList,
	Registration,
} from './components';
import { mockedCoursesList } from './constants';

import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const [chosenCourseId, setChosenCourseId] = useState<string>('');

	function getChosenCourseId(courseId: string) {
		setChosenCourseId(courseId);
	}

	const chosenCourseArr = mockedCoursesList.filter(
		(el) => el.id === chosenCourseId
	);
	const chosenCourse = chosenCourseArr[0];

	function goBackToCourses() {
		setChosenCourseId('');
	}

	return (
		<>
			<BrowserRouter>
				<Header />
				<main className='main'>
					<div className='small-container'>
						<Routes>
							<Route
								path='/courses'
								element={
									<>
										{mockedCoursesList.length < 1 ? (
											<EmptyCourseList />
										) : chosenCourseId === '' ? (
											<Courses getChosenCourseId={getChosenCourseId} />
										) : (
											<CourseInfo
												id={chosenCourse.id}
												title={chosenCourse.title}
												description={chosenCourse.description}
												authors={chosenCourse.authors}
												duration={chosenCourse.duration}
												creationDate={chosenCourse.creationDate}
												goBackToCourses={goBackToCourses}
											/>
										)}
									</>
								}
							/>
							<Route path='/' element={<Registration />} />
						</Routes>
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

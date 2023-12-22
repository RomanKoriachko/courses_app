import React, { useState } from 'react';

import { Header, Courses, CourseInfo, EmptyCourseList } from './components';
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
				<Routes>
					<Header />
					<Route path='/' element={<App />} />
					<main className='main'>
						<div className='small-container'>
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
						</div>
					</main>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

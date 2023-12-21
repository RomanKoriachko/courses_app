import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourceInfo/CourseInfo';
import { mockedCoursesList } from './constants';

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
			<Header />
			<main className='main'>
				<div className='small-container'>
					{chosenCourseId === '' ? (
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
		</>
	);
}

export default App;

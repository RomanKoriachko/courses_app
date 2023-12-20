import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
	return (
		<>
			<Header />
			<div className='small-container'>
				<Courses />
			</div>
		</>
	);
}

export default App;

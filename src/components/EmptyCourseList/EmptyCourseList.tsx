import React from 'react';

import Button from 'src/common/Button/Button';
import { ADD_COURSE_BUTTON_TEXT } from 'src/constants';

import './EmptyCourseList.scss';
import { Link } from 'react-router-dom';

const EmptyCourseList = () => {
	return (
		<div className='empty-course-list'>
			<p className='empty-course-list-title'>Your List Is Empty</p>
			<p className='empty-course-list-text'>
				Please use ’Add New Course’ button to add your first course
			</p>
			<Link to='/courses/add'>
				<Button buttonText={ADD_COURSE_BUTTON_TEXT} />
			</Link>
		</div>
	);
};

export default EmptyCourseList;

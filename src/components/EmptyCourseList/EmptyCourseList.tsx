import React from 'react';

import Button from 'src/common/Button/Button';
import { ADD_COURSE_BUTTON_TEXT } from 'src/constants';

import './EmptyCourseList.scss';

const EmptyCourseList = () => {
	return (
		<div className='empty-course-list'>
			<p className='empty-course-list-title'>Your List Is Empty</p>
			<p className='empty-course-list-text'>
				Please use ’Add New Course’ button to add your first course
			</p>
			<Button buttonText={ADD_COURSE_BUTTON_TEXT} />
		</div>
	);
};

export default EmptyCourseList;

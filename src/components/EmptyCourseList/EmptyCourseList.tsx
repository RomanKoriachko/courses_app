import React from 'react';
import './EmptyCourseList.scss';
import Button from 'src/common/Button/Button';

const EmptyCourseList = () => {
	return (
		<div className='empty-course-list'>
			<p className='empty-course-list-title'>Your List Is Empty</p>
			<p className='empty-course-list-text'>
				Please use ’Add New Course’ button to add your first course
			</p>
			<Button buttonText='Add new course' />
		</div>
	);
};

export default EmptyCourseList;

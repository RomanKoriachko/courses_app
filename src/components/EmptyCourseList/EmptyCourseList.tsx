import React from 'react';

import Button from 'src/common/Button/Button';
import { ADD_COURSE_BUTTON_TEXT } from 'src/constants';

import './EmptyCourseList.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/store';

const EmptyCourseList = () => {
	const userState = useAppSelector((state) => state.users);
	return (
		<div className='empty-course-list'>
			<p className='empty-course-list-title'>Your List Is Empty</p>
			<p className='empty-course-list-text'>
				Please use ’Add New Course’ button to add your first course
			</p>
			{userState.role === 'admin' ? (
				<Link to='/courses/add'>
					<Button buttonText={ADD_COURSE_BUTTON_TEXT} />
				</Link>
			) : (
				<p>
					You don't have permissions to create a course. Please log in as ADMIN
				</p>
			)}
		</div>
	);
};

export default EmptyCourseList;

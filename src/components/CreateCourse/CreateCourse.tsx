import React from 'react';

import { AuthorItem, InputAndLabel } from './components';
import { Button } from 'src/common';

import './CreateCourse.scss';

const CreateCourse = () => {
	return (
		<div className='create-course'>
			<p className='create-course-title'>Course edit/create page</p>
			<div className='create-course-form'>
				<p className='create-course-subtitle'>Main Info</p>
				<InputAndLabel labelText='Title' placeholderText='Input text' />
				<label
					className='create-course-textarea-label'
					htmlFor='create-course-description'
				>
					Description
				</label>
				<textarea
					className='create-course-textarea'
					name='create-course-description'
					id='create-course-description'
					placeholder='Input text'
				></textarea>
				<p className='create-course-subtitle'>Duration</p>
				<div className='create-course-input-row'>
					<InputAndLabel labelText='Duration' placeholderText='Input text' />
					<div>hours</div>
				</div>
				<div className='create-course-row'>
					<div>
						<p className='create-course-subtitle'>Authors</p>
						<div className='create-course-input-row'>
							<InputAndLabel
								labelText='Author Name'
								placeholderText='Input text'
							/>
							<Button buttonText='create author' />
						</div>
						<p className='create-course-subtitle'>Authors List</p>
						<AuthorItem />
					</div>
					<div className='create-course-addet-authors'>
						<p className='create-course-subtitle'>Course Authors</p>
						<p>Author list is empty</p>
					</div>
				</div>
			</div>
			<div className='create-course-buttons-row'>
				<Button buttonText='cancel' />
				<Button buttonText='create course' />
			</div>
		</div>
	);
};

export default CreateCourse;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import { AuthorItem, InputAndLabel } from './components';
import { Button } from 'src/common';
import { checkInputValidation, getCourseDuration } from 'src/helpers';
import { v4 as uuidv4 } from 'uuid';

import './CreateCourse.scss';

type FormDataType = {
	title: string;
	description: string;
	duration: number;
	authors: string[];
};

type AuthorType = {
	id: string;
	name: string;
};

const CreateCourse = () => {
	const [formData, setFormData] = useState<FormDataType>({
		title: '',
		description: '',
		duration: null,
		authors: [],
	});

	function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData((prevState) => ({
			...prevState,
			title: e.target.value,
		}));
	}
	function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setFormData((prevState) => ({
			...prevState,
			description: e.target.value,
		}));
	}
	function handleChangeDuration(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData((prevState) => {
			const newStr = e.target.value.replace(/^0+/, '');
			return {
				...prevState,
				duration: parseInt(newStr),
			};
		});
	}

	// console.log(formData);

	const [newAuthorName, setNewAuthorName] = useState<string>('');
	const [authorsList, setAuthorsList] = useState<AuthorType[]>([
		{
			id: '1234124124',
			name: 'Andrii Petrov',
		},
		{
			id: '9823598163598326',
			name: 'Semen Ivanov',
		},
	]);

	function handleCHangeNewAuthor(e: React.ChangeEvent<HTMLInputElement>) {
		setNewAuthorName(e.target.value);
	}

	function addNewAuthor() {
		const newArr = authorsList;
		newArr.push({
			id: uuidv4(),
			name: newAuthorName,
		});
		setAuthorsList(newArr);
		setNewAuthorName('');
	}

	return (
		<div className='create-course'>
			<p className='create-course-title'>Course edit/create page</p>
			<form className='create-course-form' method='POST'>
				<div className='create-course-wrapper'>
					<div className='create-course-input-wrapper'>
						<p className='create-course-subtitle'>Main Info</p>
						<InputAndLabel
							labelText='Title'
							required={true}
							placeholderText='Input text'
							type='text'
							value={formData.title}
							onChange={handleChangeTitle}
						/>
						<p className='validation-message'>Title is required.</p>
					</div>
					<div className='create-course-input-wrapper'>
						<label
							className='create-course-textarea-label'
							htmlFor='create-course-description'
						>
							Description
						</label>
						<textarea
							required
							className='create-course-textarea create-course-input'
							name='create-course-description'
							id='create-course-description'
							placeholder='Input text'
							value={formData.description}
							onChange={handleChangeDescription}
						></textarea>
						<p className='validation-message'>Description is required.</p>
					</div>
					<div className='create-course-input-wrapper'>
						<p className='create-course-subtitle'>Duration</p>
						<div className='create-course-input-row'>
							<InputAndLabel
								labelText='Duration'
								required={true}
								placeholderText='Input text'
								type='number'
								pattern='/[0-9]|\./'
								value={formData.duration}
								onChange={handleChangeDuration}
							/>
							<p className='validation-message'>Duration is required.</p>
							<div className='create-course-input-hours'>
								{isNaN(formData.duration) || formData.duration == null
									? '00:00 hours'
									: getCourseDuration(formData.duration)}
							</div>
						</div>
					</div>
					<div className='create-course-row'>
						<div>
							<p className='create-course-subtitle'>Authors</p>
							<div className='create-course-input-row'>
								<InputAndLabel
									labelText='Author Name'
									required={false}
									placeholderText='Input text'
									type='text'
									value={newAuthorName}
									onChange={handleCHangeNewAuthor}
								/>
								<Button
									buttonText='create author'
									type='button'
									onClick={addNewAuthor}
								/>
							</div>
							<p className='create-course-subtitle'>Authors List</p>
							<div className='create-course-new-authors'>
								{authorsList.map((element) => (
									<div key={element.id}>
										<AuthorItem
											id={element.id}
											author={element.name}
											authorsList={authorsList}
											setAuthorsList={setAuthorsList}
										/>
									</div>
								))}
							</div>
						</div>
						<div className='create-course-addet-authors'>
							<p className='create-course-subtitle'>Course Authors</p>
							<p>Author list is empty</p>
						</div>
					</div>
				</div>
				<div className='create-course-buttons-row'>
					<Button buttonText='cancel' type='button' />
					<div
						className='create-course-submit-btn-wrapper'
						onClick={() =>
							checkInputValidation('create-course-input', 'validation-message')
						}
					>
						<Button buttonText='create course' type='submit' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;

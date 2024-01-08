import React, { useEffect, useState } from 'react';

import { AuthorItem, InputAndLabel } from './components';
import { Button } from 'src/common';
import {
	checkInputValidation,
	getCourseDuration,
	getCurrentDate,
} from 'src/helpers';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { addNewCourseAction } from 'src/store/courses/actions';

import './CreateCourse.scss';
import {
	addNewAuthorAction,
	deliteAuthorAction,
} from 'src/store/authors/actions';
import { useAppDispatch, useAppSelector } from 'src/store';

type AuthorType = {
	id: string;
	name: string;
};

type CoursesArrType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

const CreateCourse = () => {
	// Input handlers

	const [formData, setFormData] = useState<CoursesArrType>({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
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

	// Adding new authors

	const [authorNameInput, setAuthorNameInput] = useState<string>('');
	const authorsArrState = useAppSelector((state) => state.authors);
	const [authorsArrLocalState, setAuthorsArrlocalState] =
		useState(authorsArrState);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (authorsArrState.length > 0) {
			setAuthorsArrlocalState(authorsArrState);
		}
	}, [authorsArrState.length]);

	function handleChangeNewAuthor(e: React.ChangeEvent<HTMLInputElement>) {
		setAuthorNameInput(e.target.value);
	}

	function addNewAuthor() {
		if (authorNameInput.length < 2) {
			alert('author name too short');
		} else {
			const newAuthor = {
				id: uuidv4(),
				name: authorNameInput,
			};
			dispatch(addNewAuthorAction(newAuthor));
			setAuthorsArrlocalState(authorsArrState);
			setAuthorNameInput('');
		}
	}

	function deliteFromAuthorsList(id: string) {
		dispatch(deliteAuthorAction(id));
		setAuthorsArrlocalState(authorsArrState);
	}

	// Add and delite authors from Course Authors

	const [courseAuthorsArr, setCourseAuthorsArr] = useState<AuthorType[]>([]);

	function addToCourseAuthors(id: string) {
		const updatedCourseAuthorsArr = [...courseAuthorsArr];
		const currentAuthor = authorsArrLocalState.filter(
			(author) => author.id === id
		);
		updatedCourseAuthorsArr.push(currentAuthor[0]);

		setFormData((PrevState) => ({
			...PrevState,
			authors: [...PrevState.authors, currentAuthor[0].id],
		}));
		setCourseAuthorsArr(updatedCourseAuthorsArr);
		const updatedAuthorsList = authorsArrLocalState.filter(
			(author) => author.id !== id
		);
		setAuthorsArrlocalState(updatedAuthorsList);
	}

	function deliteFromCourseAuthors(id: string) {
		const updatedAuthorsList = courseAuthorsArr.filter(
			(author) => author.id !== id
		);
		const updatedCourseAuthorsArr = [...authorsArrLocalState];
		const currentAuthor = courseAuthorsArr.filter((author) => author.id === id);
		updatedCourseAuthorsArr.push(currentAuthor[0]);
		setFormData((prevState) => ({
			...prevState,
			authors: prevState.authors.filter((author) => author !== id),
		}));
		setCourseAuthorsArr(updatedAuthorsList);
		setAuthorsArrlocalState(updatedCourseAuthorsArr);
	}

	// Form submit function

	function checkFormValidation() {
		checkInputValidation('create-course-input', 'validation-message');
		setFormData((prevState) => ({
			...prevState,
			id: uuidv4(),
			creationDate: getCurrentDate(),
		}));
	}

	const navigate = useNavigate();
	function onFormSubmitClick(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (formData.authors.length < 1) {
			alert('at least one author should be added');
		} else {
			dispatch(addNewCourseAction(formData));
			navigate('/courses');
		}
	}

	return (
		<div className='create-course'>
			<p className='create-course-title'>Course edit/create page</p>
			<form className='create-course-form' onSubmit={onFormSubmitClick}>
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
								value={
									formData.duration === 0 || isNaN(formData.duration)
										? ''
										: formData.duration
								}
								onChange={handleChangeDuration}
							/>
							<p className='validation-message'>Duration is required.</p>
							<div className='create-course-input-hours'>
								{isNaN(formData.duration) || formData.duration === 0
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
									value={authorNameInput}
									onChange={handleChangeNewAuthor}
								/>
								<Button
									buttonText='create author'
									type='button'
									onClick={addNewAuthor}
								/>
							</div>
							<p className='create-course-subtitle'>Authors List</p>
							<div className='create-course-new-authors'>
								{authorsArrLocalState.map((element) => (
									<div key={element.id}>
										<AuthorItem
											id={element.id}
											author={element.name}
											onDeliteClick={deliteFromAuthorsList}
											onAddClick={addToCourseAuthors}
										/>
									</div>
								))}
							</div>
						</div>
						<div className='create-course-addet-authors'>
							<p className='create-course-subtitle'>Course Authors</p>
							{courseAuthorsArr.length < 1 ? (
								<p>Author list is empty</p>
							) : (
								courseAuthorsArr.map((element) => (
									<div key={element.id}>
										<AuthorItem
											id={element.id}
											author={element.name}
											onDeliteClick={deliteFromCourseAuthors}
										/>
									</div>
								))
							)}
						</div>
					</div>
				</div>
				<div className='create-course-buttons-row'>
					<Link to='/courses'>
						<Button buttonText='cancel' type='button' />
					</Link>
					<div
						className='create-course-submit-btn-wrapper'
						onClick={checkFormValidation}
					>
						<Button buttonText='create course' type='submit' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;

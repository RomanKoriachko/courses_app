import React, { useEffect, useState } from 'react';

import { AuthorItem, InputAndLabel } from './components';
import { Button } from 'src/common';
import {
	checkInputValidation,
	getCourseDuration,
	postDataToServer,
} from 'src/helpers';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import {
	ADD_AUTHOR_LINK,
	ADD_COURSE_LINK,
	DELETE_COURSE_LINK,
} from 'src/constants';
import { fetchAuthorsData } from 'src/store/authors/thunk';
import { fetchCoursesData } from 'src/store/courses/thunk';

import './CourseForm.scss';

type AuthorType = {
	name: string;
	id: string;
};

type CoursesArrType = {
	title: string;
	description: string;
	duration: number;
	authors: string[];
};

const CourseForm = () => {
	// Input handlers

	const [formData, setFormData] = useState<CoursesArrType>({
		title: '',
		description: '',
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

	const authorsArrState = useAppSelector((state) => state.authors);
	const dispatch = useAppDispatch();

	const [authorsArrLocalState, setAuthorsArrlocalState] = useState([]);

	const [authorNameInput, setAuthorNameInput] = useState<string>('');

	function handleChangeNewAuthor(e: React.ChangeEvent<HTMLInputElement>) {
		setAuthorNameInput(e.target.value);
	}

	useEffect(() => {
		dispatch(fetchAuthorsData());
	}, [authorsArrState.length]);

	function addNewAuthor() {
		const newAuthor = {
			name: authorNameInput,
		};
		async function postData() {
			await postDataToServer(
				ADD_AUTHOR_LINK,
				'POST',
				newAuthor,
				userState.token
			);
			dispatch(fetchAuthorsData());
		}
		if (authorNameInput.length < 2) {
			alert('author name too short');
		} else {
			postData();
			getCurrentCourseData();
			setAuthorNameInput('');
		}
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

	// Editing course

	const params = useParams();
	const coursesState = useAppSelector((state) => state.courses);

	useEffect(() => {
		dispatch(fetchCoursesData());
	}, []);

	useEffect(() => {
		if (coursesState.length > 0 && params.courseId) {
			getCurrentCourseData();
		} else {
			setAuthorsArrlocalState(authorsArrState);
		}
	}, [coursesState.length]);

	useEffect(() => {
		if (!params.courseId) {
			setAuthorsArrlocalState(authorsArrState);
		} else {
			getCurrentCourseData();
		}
	}, [authorsArrState]);

	function getCurrentCourseData() {
		let currentCourse = [];
		if (coursesState.length > 0) {
			currentCourse = coursesState.filter(
				(cource) => cource.id === params.courseId
			);
		} else {
			currentCourse = [
				{
					id: '',
					title: '',
					description: '',
					creationDate: '',
					duration: 0,
					authors: [],
				},
			];
		}

		setFormData((prevState) => ({
			...prevState,
			title: currentCourse[0].title,
			description: currentCourse[0].description,
			duration: currentCourse[0].duration,
			authors: currentCourse[0].authors,
		}));

		const currentCourseAuthors = authorsArrState.filter((author) =>
			currentCourse[0].authors.includes(author.id)
		);

		setCourseAuthorsArr(currentCourseAuthors);

		const currentAuthorsList = authorsArrState.filter(
			(author) =>
				!currentCourseAuthors.some(
					(courseAuthor) => courseAuthor.id === author.id
				)
		);

		setAuthorsArrlocalState(currentAuthorsList);
	}

	// Form submit function

	function checkFormValidation() {
		checkInputValidation('create-course-input', 'validation-message');
	}

	const userState = useAppSelector((state) => state.users);

	const navigate = useNavigate();
	async function onFormSubmitClick(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (formData.authors.length < 1) {
			alert('at least one author should be added');
		} else if (!params.courseId) {
			await postDataToServer(
				ADD_COURSE_LINK,
				'POST',
				formData,
				userState.token
			);
			navigate('/courses');
		} else {
			await postDataToServer(
				DELETE_COURSE_LINK + params.courseId,
				'PUT',
				formData,
				userState.token
			);
			await dispatch(fetchCoursesData());
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
								courseAuthorsArr.map((element, i) => (
									<div key={i}>
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
						<Button
							buttonText={params.courseId ? 'update course' : 'create course'}
							type='submit'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CourseForm;

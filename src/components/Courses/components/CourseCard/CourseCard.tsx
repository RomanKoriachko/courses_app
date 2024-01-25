import React from 'react';

import Button from 'src/common/Button/Button';
import {
	getShortenString,
	getAuthors,
	getCourseDuration,
	formatCreationDate,
} from '../../../../helpers';
import { SHOW_COURSE_BUTTON_TEXT } from 'src/constants';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';

import './CourseCard.scss';
import { deleteCourse } from 'src/store/courses/thunk';

type Props = {
	courseId: string;
	title: string;
	description: string;
	authors: string[];
	duration: number;
	creationDate: string;
};

const CourseCard = ({
	courseId,
	title,
	description,
	authors,
	duration,
	creationDate,
}: Props) => {
	const userState = useAppSelector((state) => state.users);
	const coursesState = useAppSelector((state) => state.courses);
	const authorsState = useAppSelector((state) => state.authors);
	const dispatch = useAppDispatch();

	function onDeliteCourseClick() {
		dispatch(deleteCourse(courseId, userState.token));
	}

	return (
		<div className='course-card'>
			<p className='course-card-title'>{title}</p>
			<div className='course-card-row'>
				<p className='course-card-description'>{description}</p>
				<div className='course-card-data'>
					<p className='course-card-data-item'>
						<span className='bold-text'>Authors: </span>
						{getShortenString(getAuthors(authors, authorsState))}
					</p>
					<p className='course-card-data-item'>
						<span className='bold-text'>Duration: </span>
						{getCourseDuration(duration)}
					</p>
					<p className='course-card-data-item'>
						<span className='bold-text'>Created: </span>
						{formatCreationDate(creationDate)}
					</p>
					<div className='course-card-buttons-row'>
						<Link to={`/courses/${courseId}`}>
							<Button
								buttonText={SHOW_COURSE_BUTTON_TEXT}
								className='show-course'
							/>
						</Link>
						{userState.role === 'admin' ? (
							<>
								<Button
									onClick={onDeliteCourseClick}
									buttonText=''
									className='delite'
									isDisable={coursesState.length <= 1 ? true : false}
								/>
								<Link to={`/courses/update/${courseId}`}>
									<Button buttonText='' className='edit' />
								</Link>
							</>
						) : undefined}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

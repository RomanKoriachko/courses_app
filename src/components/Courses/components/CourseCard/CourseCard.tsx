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

import './CourseCard.scss';
import { useAppDispatch } from 'src/store';
import { deleteCourseAction } from 'src/store/courses/actions';

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
	const dispatch = useAppDispatch();

	return (
		<div className='course-card'>
			<p className='course-card-title'>{title}</p>
			<div className='course-card-row'>
				<p className='course-card-description'>{description}</p>
				<div className='course-card-data'>
					<p className='course-card-data-item'>
						<span className='bold-text'>Authors: </span>
						{getShortenString(getAuthors(authors))}
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
						<Button
							onClick={() => dispatch(deleteCourseAction(courseId))}
							buttonText=''
							className='delite'
						/>
						<Button buttonText='' className='edit' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

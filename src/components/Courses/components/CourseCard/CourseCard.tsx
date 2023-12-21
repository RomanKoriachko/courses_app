import React from 'react';
import Button from 'src/common/Button/Button';
import './CourseCard.scss';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { getAuthors } from 'src/helpers/getAuthors';
import { getShortenString } from 'src/helpers/getShortenString';

type Props = {
	id: string;
	title: string;
	description: string;
	authors: string[];
	duration: number;
	creationDate: string;
	getChosenCourseId(courceId: string): void;
};

const CourseCard = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
	getChosenCourseId,
}: Props) => {
	return (
		<div className='course-card'>
			<p className='course-card-title'>{title}</p>
			<div className='course-card-row'>
				<p className='course-card-description'>{description}</p>
				<div className='course-card-data'>
					<p className='course-card-data-item'>
						<span className='bold-text'>Authors:</span>{' '}
						{getShortenString(getAuthors(authors))}
					</p>
					<p className='course-card-data-item'>
						<span className='bold-text'>Duration:</span>{' '}
						{getCourseDuration(duration)}
					</p>
					<p className='course-card-data-item'>
						<span className='bold-text'>Created:</span>{' '}
						{formatCreationDate(creationDate)}
					</p>
					<Button
						buttonText={'show course'}
						onClick={() => getChosenCourseId(id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

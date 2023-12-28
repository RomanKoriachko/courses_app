import React from 'react';

import {
	getCourseDuration,
	getAuthors,
	formatCreationDate,
} from '../../helpers';
import Button from 'src/common/Button/Button';
import { Link, useParams } from 'react-router-dom';
import { mockedCoursesList } from 'src/constants';

import './CourseInfo.scss';

const CourceInfo = () => {
	const params = useParams();
	const CurrentCourse = mockedCoursesList.filter(
		(element) => element.id === params.courseId
	);

	const [number, unit] = getCourseDuration(CurrentCourse[0].duration).split(
		' '
	);

	return (
		<div className='cource-info'>
			<p className='cource-info-title'>{CurrentCourse[0].title}</p>
			<div className='cource-info-card'>
				<div className='cource-info-description'>
					<p className='cource-info-description-title'>Description:</p>
					<p className='cource-info-description-text'>
						{CurrentCourse[0].description}
					</p>
				</div>
				<div className='cource-info-data'>
					<div className='cource-info-data-item'>
						<p className='cource-info-data-item-name'>ID:</p>
						<p className='cource-info-data-item-content'>
							{CurrentCourse[0].id}
						</p>
					</div>
					<div className='cource-info-data-item'>
						<p className='cource-info-data-item-name'>Duration:</p>
						<p className='cource-info-data-item-content'>
							<span className='bold-text'>{number}:</span> {unit}
						</p>
					</div>
					<div className='cource-info-data-item'>
						<p className='cource-info-data-item-name'>Created:</p>
						<p className='cource-info-data-item-content'>
							{formatCreationDate(CurrentCourse[0].creationDate)}
						</p>
					</div>
					<div className='cource-info-data-item'>
						<p className='cource-info-data-item-name'>Authors:</p>
						<p className='cource-info-data-item-content'>
							{getAuthors(CurrentCourse[0].authors)}
						</p>
					</div>
				</div>
			</div>
			<div className='cource-info-btn-wrapper'>
				<Link to={'/courses'}>
					<Button buttonText='Back' />
				</Link>
			</div>
		</div>
	);
};

export default CourceInfo;

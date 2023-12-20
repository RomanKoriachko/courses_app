import React from 'react';
import Button from 'src/common/Button/Button';
import { mockedCoursesList, mockedAuthorsList } from 'src/constants';
import './CourseCard.scss';

const CourseCard = () => {
	return (
		<div className='course-card'>
			<p className='course-card-title'>Angular</p>
			<div className='course-card-row'>
				<p className='course-card-description'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
				<div className='course-card-data'>
					<p className='course-card-data-item'>
						<span className='bold-text'>Authors:</span> Dave Haisenberg, Tony Ja
					</p>
					<p className='course-card-data-item'>
						<span className='bold-text'>Duration:</span> 2:30 hours
					</p>
					<p className='course-card-data-item'>
						<span className='bold-text'>Created:</span> 20.03.2012
					</p>
					<Button buttonText={'show course'} />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

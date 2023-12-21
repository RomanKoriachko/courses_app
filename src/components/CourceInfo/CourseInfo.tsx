import React from 'react';

import {
	getCourseDuration,
	getAuthors,
	formatCreationDate,
} from '../../helpers';
import Button from 'src/common/Button/Button';

import './CourseInfo.scss';

type Props = {
	id: string;
	title: string;
	description: string;
	authors: string[];
	duration: number;
	creationDate: string;
	goBackToCourses(): void;
};

const CourceInfo = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
	goBackToCourses,
}: Props) => {
	const [number, unit] = getCourseDuration(duration).split(' ');

	return (
		<div className='cource-info'>
			<p className='cource-info-title'>{title}</p>
			<div className='cource-info-card'>
				<div className='cource-info-description'>
					<p className='cource-info-description-title'>Description:</p>
					<p className='cource-info-description-text'>{description}</p>
				</div>
				<div className='cource-info-data'>
					<div className='cource-info-data-item'>
						<p className='cource-info-data-item-name'>ID:</p>
						<p className='cource-info-data-item-content'>{id}</p>
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
							{formatCreationDate(creationDate)}
						</p>
					</div>
					<div className='cource-info-data-item'>
						<p className='cource-info-data-item-name'>Authors:</p>
						<p className='cource-info-data-item-content'>
							{getAuthors(authors)}
						</p>
					</div>
				</div>
			</div>
			<div className='cource-info-btn-wrapper'>
				<Button buttonText='Back' onClick={goBackToCourses} />
			</div>
		</div>
	);
};

export default CourceInfo;

import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from 'src/constants';
import './Courses.scss';

const Courses = () => {
	return (
		<div className='courses'>
			{mockedCoursesList.map(
				({ id, title, description, creationDate, duration, authors }) => (
					<React.Fragment key={id}>
						<CourseCard
							title={title}
							description={description}
							authors={authors}
							duration={duration}
							creationDate={creationDate}
						/>
					</React.Fragment>
				)
			)}
		</div>
	);
};

export default Courses;

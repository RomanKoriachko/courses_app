import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from 'src/constants';

type Props = {
	getChosenCourseId(courceId: string): void;
};

const Courses = ({ getChosenCourseId }: Props) => {
	return (
		<div className='courses'>
			{mockedCoursesList.map(
				({ id, title, description, creationDate, duration, authors }) => (
					<React.Fragment key={id}>
						<CourseCard
							id={id}
							title={title}
							description={description}
							authors={authors}
							duration={duration}
							creationDate={creationDate}
							getChosenCourseId={getChosenCourseId}
						/>
					</React.Fragment>
				)
			)}
		</div>
	);
};

export default Courses;

import { getData } from 'src/helpers';
import * as types from './types';
import { COURSES_LIST, ERROR_MESSAGE } from 'src/constants';
import { setErrorStateAction } from '../errorState/actions';

export const saveCoursesAction = (
	courseData: types.CourseType[]
): types.SaveCourses => ({
	type: types.CoursesActionTypes.SAVE_COURSES,
	payload: courseData,
});

export const addNewCourseAction = (
	courseData: types.CourseType
): types.AddCourse => ({
	type: types.CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

export const deleteCourseAction = (courseData: string): types.DeleteCourse => ({
	type: types.CoursesActionTypes.DELETE_COURSE,
	payload: courseData,
});

export const fetchData = () => async (dispatch) => {
	try {
		const coursesResult = await getData(COURSES_LIST, 'GET');
		dispatch(saveCoursesAction(coursesResult));
		dispatch(setErrorStateAction(false));
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
		dispatch(setErrorStateAction(true));
	}
};

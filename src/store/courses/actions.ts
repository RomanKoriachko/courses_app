import { getDataFromServer } from 'src/helpers';
import * as types from './types';
import { COURSES_LIST, DELETE_COURSE_LINK, ERROR_MESSAGE } from 'src/constants';
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
		const coursesResult = await getDataFromServer(
			COURSES_LIST,
			'GET',
			dispatch
		);
		dispatch(saveCoursesAction(coursesResult));
		dispatch(setErrorStateAction(false));
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
		dispatch(setErrorStateAction(true));
	}
};

export const deleteData = (id: string, userToken: string) => async () => {
	try {
		await getDataFromServer(DELETE_COURSE_LINK + id, 'DELETE', userToken);
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
};

import * as types from './types';

// type SaveCourseAction = {
// 	type: types.CoursesActionTypes.SAVE_COURSES;
// 	payload: types.CourseType[];
// };
// type AddNewCourseAction = {
// 	type: types.CoursesActionTypes.ADD_COURSE;
// 	payload: types.CourseType;
// };

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

// interface SaveCourses {
// 	type: types.CoursesActionTypes.SAVE_COURSES;
// 	payload: types.CourseType[];
// }

// interface AddCourse {
// 	type: types.CoursesActionTypes.ADD_COURSE;
// 	payload: types.CourseType;
// }

// interface DeleteCourse {
// 	type: types.CoursesActionTypes.DELETE_COURSE;
// 	payload: string;
// }

// export type CoursesAction = SaveCourses | AddCourse | DeleteCourse;

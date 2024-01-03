import * as types from './types';

type SaveAuthorsAction = {
	type: types.CoursesActionTypes.SAVE_AUTHORS;
	payload: types.AuthorsType[];
};
type AddNewAuthorsAction = {
	type: types.CoursesActionTypes.ADD_AUTHORS;
	payload: types.AuthorsType;
};

export const saveCoursesAction = (
	courseData: types.AuthorsType[]
): SaveAuthorsAction => ({
	type: types.CoursesActionTypes.SAVE_AUTHORS,
	payload: courseData,
});

export const addNewCourseAction = (
	courseData: types.AuthorsType
): AddNewAuthorsAction => ({
	type: types.CoursesActionTypes.ADD_AUTHORS,
	payload: courseData,
});

// interface SaveAuthors {
// 	type: types.CoursesActionTypes.SAVE_AUTHORS;
// 	payload: types.AuthorsType[];
// }

// interface AddAuthors {
// 	type: types.CoursesActionTypes.ADD_AUTHORS;
// 	payload: types.AuthorsType;
// }

// interface DeleteAuthors {
// 	type: types.CoursesActionTypes.DELETE_AUTHORS;
// 	payload: string;
// }

// export type AuthorsAction = SaveAuthors | AddAuthors | DeleteAuthors;

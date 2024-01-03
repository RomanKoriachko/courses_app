import * as types from './types';

// type SaveAuthorsAction = {
// 	type: types.CoursesActionTypes.SAVE_AUTHORS;
// 	payload: types.AuthorsType[];
// };
// type AddNewAuthorsAction = {
// 	type: types.CoursesActionTypes.ADD_AUTHORS;
// 	payload: types.AuthorsType;
// };

export const saveAuthorsAction = (
	authorsData: types.AuthorsType[]
): types.SaveAuthors => ({
	type: types.AuthorsActionTypes.SAVE_AUTHORS,
	payload: authorsData,
});

export const addNewAuthorAction = (
	authorsData: types.AuthorsType
): types.AddAuthors => ({
	type: types.AuthorsActionTypes.ADD_AUTHORS,
	payload: authorsData,
});

export const deliteAuthorAction = (
	authorsData: string
): types.DeleteAuthors => ({
	type: types.AuthorsActionTypes.DELETE_AUTHORS,
	payload: authorsData,
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

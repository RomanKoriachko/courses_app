import { getData } from 'src/helpers';
import * as types from './types';
import { AUTHORS_LIST, ERROR_MESSAGE } from 'src/constants';
import { setErrorStateAction } from '../errorState/actions';

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

export const fetchData = () => async (dispatch) => {
	try {
		const authorsResult = await getData(AUTHORS_LIST);
		dispatch(saveAuthorsAction(authorsResult));
		dispatch(setErrorStateAction(false));
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
		dispatch(setErrorStateAction(true));
	}
};

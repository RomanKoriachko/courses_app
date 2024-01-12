import { getDataFromServer } from 'src/helpers';
import * as types from './types';
import {
	CURRENT_USER_LINK,
	DELETE_USER_LINK,
	ERROR_MESSAGE,
} from 'src/constants';
import { setErrorStateAction } from '../errorState/actions';

export const addUserAction = (userData: types.UserType): types.AddUser => ({
	type: types.UsersActionTypes.ADD_USER,
	payload: userData,
});

export const deleteUserAction = (
	userData?: types.UserType
): types.DeleteUser => ({
	type: types.UsersActionTypes.DELETE_USER,
	payload: userData,
});

export const fetchData = (userToken: string) => async (dispatch) => {
	try {
		const result = await getDataFromServer(CURRENT_USER_LINK, 'GET', userToken);
		const actualData: types.UserType = {
			isAuth: true,
			name: '',
			email: '',
			token: userToken,
			role: '',
		};
		actualData.name = result.name;
		actualData.email = result.email;
		actualData.role = result.role;
		dispatch(addUserAction(actualData));
		dispatch(setErrorStateAction(false));
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
		dispatch(setErrorStateAction(true));
	}
};

export const deleteData = (userToken: string) => async (dispatch) => {
	try {
		await getDataFromServer(DELETE_USER_LINK, 'DELETE', userToken);
		localStorage.removeItem('loginData');
		dispatch(deleteUserAction());
	} catch (error) {
		console.error(ERROR_MESSAGE, error);
	}
};

import { getData } from 'src/helpers';
import * as types from './types';
import { CURRENT_USER_LINK, ERROR_MESSAGE } from 'src/constants';
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

export const fetchData = (usertoken: string) => async (dispatch) => {
	try {
		const result = await getData(CURRENT_USER_LINK, {
			Authorization: usertoken,
		});
		const actualData: types.UserType = {
			isAuth: true,
			name: '',
			email: '',
			token: usertoken,
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

import * as types from './types';

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

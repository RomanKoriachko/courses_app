import * as types from './types';

export const initUsersState: types.UserType = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const usersReducer = (
	state = initUsersState,
	action: types.UsersAction
) => {
	switch (action.type) {
		case types.UsersActionTypes.ADD_USER:
			return action.payload;

		case types.UsersActionTypes.DELETE_USER:
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};

		default:
			return state;
	}
};

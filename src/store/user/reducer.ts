import * as types from './types';

export const initUsersState: types.UserType = {
	result: '',
	successful: false,
	user: {
		name: '',
		password: '',
		email: '',
	},
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
				result: '',
				successful: false,
				user: {
					name: '',
					password: '',
					email: '',
				},
			};

		default:
			return state;
	}
};

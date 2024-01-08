export const enum UsersActionTypes {
	SAVE_USER = 'SAVE_USER',
	ADD_USER = 'ADD_USER',
	DELETE_USER = 'DELETE_USER',
}

export type UserType = {
	result: string;
	successful: boolean;
	user: {
		name: string;
		password: string;
		email: string;
	};
};

export interface AddUser {
	type: UsersActionTypes.ADD_USER;
	payload: UserType;
}

export interface DeleteUser {
	type: UsersActionTypes.DELETE_USER;
	payload: UserType;
}

export type UsersAction = AddUser | DeleteUser;

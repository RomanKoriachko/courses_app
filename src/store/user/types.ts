export const enum UsersActionTypes {
	ADD_USER = 'ADD_USER',
	DELETE_USER = 'DELETE_USER',
}

export type UserType = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
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

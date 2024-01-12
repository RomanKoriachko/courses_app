// export const SAVE_AUTHORS = 'SAVE_AUTHORS';
// export const ADD_AUTHORS = 'ADD_AUTHORS';
// export const DELETE_AUTHORS = 'DELETE_AUTHORS';

export const enum AuthorsActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHORS = 'ADD_AUTHORS',
	DELETE_AUTHORS = 'DELETE_AUTHORS',
}

export type AuthorsType = {
	name: string;
	id: string;
};

export interface SaveAuthors {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorsType[];
}

export interface AddAuthors {
	type: AuthorsActionTypes.ADD_AUTHORS;
	payload: AuthorsType;
}

export interface DeleteAuthors {
	type: AuthorsActionTypes.DELETE_AUTHORS;
	payload: string;
}

export type AuthorsAction = SaveAuthors | AddAuthors | DeleteAuthors;

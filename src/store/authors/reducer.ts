import * as types from './types';

export const initAuthorsState: types.AuthorsType[] = [];

export const authorsReducer = (
	state = initAuthorsState,
	action: types.AuthorsAction
) => {
	switch (action.type) {
		case types.AuthorsActionTypes.SAVE_AUTHORS:
			return action.payload;

		case types.AuthorsActionTypes.ADD_AUTHORS:
			return [...state, action.payload];

		case types.AuthorsActionTypes.DELETE_AUTHORS:
			return state.filter((author) => author.id !== action.payload);

		default:
			return state;
	}
};

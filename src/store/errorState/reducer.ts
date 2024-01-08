import * as types from './types';

export const initErrorState = false;

export const errorState = (
	state = initErrorState,
	action: types.SetErrorState
) => {
	switch (action.type) {
		case types.ErrorActionType.SET_ERROR_STATE:
			return action.payload;

		default:
			return state;
	}
};

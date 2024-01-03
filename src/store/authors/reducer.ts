import * as types from './types';

export const initCoursesState: types.AuthorsType[] = [];

export const coursesReducer = (
	state = initCoursesState,
	action: types.AuthorsAction
) => {
	switch (action.type) {
		case types.CoursesActionTypes.SAVE_AUTHORS:
			return action.payload;

		case types.CoursesActionTypes.ADD_AUTHORS:
			return [...state, action.payload];

		default:
			return state;
	}
};

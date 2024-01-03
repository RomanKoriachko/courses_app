import * as types from './types';

export const initCoursesState: types.CourseType[] = [];

export const coursesReducer = (
	state = initCoursesState,
	action: types.CoursesAction
) => {
	switch (action.type) {
		case types.CoursesActionTypes.SAVE_COURSES:
			return action.payload;

		case types.CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];

		default:
			return state;
	}
};

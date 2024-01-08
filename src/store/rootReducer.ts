import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';
import { errorState } from './errorState/reducer';
import { usersReducer } from './user/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	errorState: errorState,
	users: usersReducer,
});

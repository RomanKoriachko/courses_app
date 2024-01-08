import * as types from './types';

export const setErrorStateAction = (
	courseData: boolean
): types.SetErrorState => ({
	type: types.ErrorActionType.SET_ERROR_STATE,
	payload: courseData,
});

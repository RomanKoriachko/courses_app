export const enum ErrorActionType {
	SET_ERROR_STATE = 'SET_ERROR_STATE',
}

export type ErrorType = boolean;

export interface SetErrorState {
	type: ErrorActionType.SET_ERROR_STATE;
	payload: boolean;
}

import { deleteData, fetchData } from './actions';

export const getCurrentUser = (usertoken: string) => async (dispatch) => {
	await dispatch(fetchData(usertoken));
};

export const logoutUser = (usertoken: string) => async (dispatch) => {
	await dispatch(deleteData(usertoken));
};

import { fetchData } from './actions';

export const getCurrentUser = (usertoken: string) => async (dispatch) => {
	await dispatch(fetchData(usertoken));
};

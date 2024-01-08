import { fetchData } from './actions';

export const fetchAuthorsData = () => async (dispatch) => {
	await dispatch(fetchData());
};

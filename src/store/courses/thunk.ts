import { fetchData } from './actions';

export const fetchCoursesData = () => async (dispatch) => {
	await dispatch(fetchData());
};

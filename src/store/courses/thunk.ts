import { deleteData, fetchData } from './actions';

export const fetchCoursesData = () => async (dispatch) => {
	await dispatch(fetchData());
};

export const deleteCourse =
	(id: string, userToken: string) => async (dispatch) => {
		await dispatch(deleteData(id, userToken));
		dispatch(fetchData());
	};

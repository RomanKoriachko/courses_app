import { saveCoursesAction } from '../courses/actions';
import { rootReducer } from '../rootReducer';

describe('rootReducer', () => {
	it('should return the initial state', () => {
		const initialState = {
			courses: [],
			authors: [],
			errorState: false,
			users: {
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			},
		};

		const action = { type: undefined, payload: undefined };

		expect(rootReducer(undefined, action)).toEqual(initialState);
	});

	it('should handle SAVE_COURSE and returns new state', () => {
		const newCoursesState = {
			id: 'test id',
			title: 'test title',
			description: 'test desc',
			creationDate: '01/01/2024',
			duration: 100,
			authors: ['test author'],
		};

		expect(
			rootReducer(undefined, saveCoursesAction([newCoursesState])).courses
		).toEqual([newCoursesState]);
	});
});

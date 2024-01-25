/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Courses from '../Courses';
import App from '../../../App';
import {
	fireEvent,
	render,
	screen,
	waitFor,
	act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockLocalStorage = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
};

beforeEach(() => {
	Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
});

test('should display amount of CourseCard equal length of courses array', () => {
	const mockedState = {
		users: {
			role: 'user',
		},
		courses: [
			{
				authors: [
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
					'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
					'a7065a02-30b8-45b1-82f8-0b6f7e96e5c3',
				],
				creationDate: '9/3/2021',
				description: '11223344',
				duration: 100,
				id: '66cc289e-6de9-49b2-9ca7-8b4f409d64325',
				title: 'title title',
			},
			{
				authors: [
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
					'a7065a02-30b8-45b1-82f8-0b6f7e96e5c3',
				],
				creationDate: '11/01/2024',
				description: '11223344',
				duration: 100,
				id: '66cc289e-6de9-49b2-9ca7-36346f409d6467',
				title: 'title 2',
			},
			{
				authors: [
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
					'a7065a02-30b8-45b1-82f8-0b6f7e96e5c3',
				],
				creationDate: '11/01/2024',
				description: '11223344',
				duration: 100,
				id: '66cc289e-6de9-49b2-346dfb-8b4f409d6467',
				title: 'title 3',
			},
		],
		authors: [],
	};

	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	mockLocalStorage.getItem.mockReturnValue(
		JSON.stringify({ user: { role: 'user' } })
	);

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Courses />
			</BrowserRouter>
		</Provider>
	);

	const { container } = render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Courses />
			</BrowserRouter>
		</Provider>
	);

	expect(container.getElementsByClassName('course-card')).toHaveLength(
		mockedState.courses.length
	);
});

test('CourseForm should be shown after a click on the "Add new course" button', async () => {
	const mockedState = {
		users: {
			role: 'admin',
		},
		courses: [
			{
				authors: [
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
					'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
					'a7065a02-30b8-45b1-82f8-0b6f7e96e5c3',
				],
				creationDate: '9/3/2021',
				description: '11223344',
				duration: 100,
				id: '66cc289e-6de9-49b2-9ca7-8b4f409d64325',
				title: 'title title',
			},
			{
				authors: [
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
					'a7065a02-30b8-45b1-82f8-0b6f7e96e5c3',
				],
				creationDate: '11/01/2024',
				description: '11223344',
				duration: 100,
				id: '66cc289e-6de9-49b2-9ca7-36346f409d6467',
				title: 'title 2',
			},
			{
				authors: [
					'40b21bd5-cbae-4f33-b154-0252b1ae03a9',
					'a7065a02-30b8-45b1-82f8-0b6f7e96e5c3',
				],
				creationDate: '11/01/2024',
				description: '11223344',
				duration: 100,
				id: '66cc289e-6de9-49b2-346dfb-8b4f409d6467',
				title: 'title 3',
			},
		],
		authors: [],
	};

	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	mockLocalStorage.getItem.mockReturnValue(
		JSON.stringify({ user: { role: 'admin' } })
	);

	render(
		<Provider store={mockedStore}>
			<App />
		</Provider>
	);

	fireEvent.click(screen.getByText('Add new course'));

	await screen.findByText('Course edit/create page');
});

/* eslint-enable no-undef */
/* eslint-enable @typescript-eslint/no-unused-vars */

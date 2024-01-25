/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import CourseCard from '../CourseCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const renderWithMockedStore = () => {
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	const mockedState = {
		users: {
			isAuth: true,
			name: 'Test Name',
		},
		courses: [
			{
				id: 'test id',
				title: 'test title',
				description: 'test desc',
				creationDate: '01/01/2024',
				duration: 100,
				authors: ['test id 1', 'test id 2'],
			},
		],
		authors: [
			{ name: 'author', id: 'test id 1' },
			{ name: 'author2', id: 'test id 2' },
		],
	};

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard
					courseId='test id'
					title='test title'
					description='test desc'
					authors={['test id 1', 'test id 2']}
					duration={100}
					creationDate='01/01/2024'
				/>
			</BrowserRouter>
		</Provider>
	);
};

test('should display title', async () => {
	renderWithMockedStore();

	expect(screen.getByText('test title')).toBeInTheDocument();
});

test('should display description', async () => {
	renderWithMockedStore();

	expect(screen.getByText('test desc')).toBeInTheDocument();
});

test('should display duration in the correct format', async () => {
	renderWithMockedStore();

	expect(screen.getByText('01:40 hour')).toBeInTheDocument();
});

test('should display authors list', async () => {
	renderWithMockedStore();

	expect(screen.getByText('author, author2')).toBeInTheDocument();
});

test('should display created date in the correct format', async () => {
	renderWithMockedStore();

	expect(screen.getByText('01.01.2024')).toBeInTheDocument();
});

/* eslint-enable no-undef */
/* eslint-enable @typescript-eslint/no-unused-vars */

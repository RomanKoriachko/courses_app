/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Header from '../Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const renderWithMockedStore = (mockedState) => {
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);
};

test('should render logo', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test Name',
		},
		courses: [],
		authors: [],
	};

	renderWithMockedStore(mockedState);

	expect(screen.getByAltText('logo')).toBeInTheDocument();
});

test('should render user name', async () => {
	const mockedState = {
		users: {
			isAuth: true,
			name: 'Test Name',
		},
		courses: [],
		authors: [],
	};

	renderWithMockedStore(mockedState);

	expect(screen.getByText('Test Name')).toBeInTheDocument();
});

/* eslint-enable no-undef */
/* eslint-enable @typescript-eslint/no-unused-vars */

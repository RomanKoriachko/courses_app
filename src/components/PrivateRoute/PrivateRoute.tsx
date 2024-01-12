import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const localUserData = JSON.parse(localStorage.getItem('loginData'));
	return localUserData.role === 'admin' ? (
		children
	) : (
		<Navigate to={'/courses'} />
	);
};

export default PrivateRoute;

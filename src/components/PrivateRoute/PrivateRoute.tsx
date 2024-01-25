import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/store';

const PrivateRoute = ({ children }) => {
	// const localUserData = JSON.parse(localStorage.getItem('loginData'));
	const userState = useAppSelector((state) => state.users);
	return userState.role === 'admin' ? children : <Navigate to={'/courses'} />;
};

export default PrivateRoute;

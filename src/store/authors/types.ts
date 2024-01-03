export const SAVE_AUTHORS = 'SAVE_AUTHORS';
export const ADD_AUTHORS = 'ADD_AUTHORS';
export const DELETE_AUTHORS = 'DELETE_AUTHORS';

export const enum CoursesActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHORS = 'ADD_AUTHORS',
	DELETE_AUTHORS = 'DELETE_AUTHORS',
}

export type AuthorsType = {
	name: string;
	id: string;
};

export interface SaveAuthors {
	type: typeof SAVE_AUTHORS;
	payload: AuthorsType[];
}

export interface AddAuthors {
	type: typeof ADD_AUTHORS;
	payload: AuthorsType;
}

export interface DeleteAuthors {
	type: typeof DELETE_AUTHORS;
	payload: string;
}

export type AuthorsAction = SaveAuthors | AddAuthors | DeleteAuthors;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { useAppSelector } from 'src/store';

export function getAuthors(authors: string[]) {
	const authorsArrState = useAppSelector((state) => state.authors);
	let result = '';
	authors.forEach((author) => {
		authorsArrState.forEach((listElement) => {
			if (listElement.id === author) {
				result === ''
					? (result = listElement.name)
					: (result = result + ', ' + listElement.name);
			}
		});
	});
	return result;
}

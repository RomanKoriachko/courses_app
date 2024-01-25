import { AuthorsType } from 'src/store/authors/types';

export function getAuthors(authors: string[], authorsState: AuthorsType[]) {
	let result = '';
	authors.forEach((author) => {
		authorsState.forEach((listElement) => {
			if (listElement.id === author) {
				result === ''
					? (result = listElement.name)
					: (result = result + ', ' + listElement.name);
			}
		});
	});
	return result;
}

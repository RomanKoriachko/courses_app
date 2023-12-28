import { mockedAuthorsList } from 'src/constants';

export function getAuthors(authors: string[]) {
	let result = '';
	authors.forEach((author) => {
		mockedAuthorsList.forEach((listElement) => {
			if (listElement.id === author) {
				result === ''
					? (result = listElement.name)
					: (result = result + ', ' + listElement.name);
			}
		});
	});
	return result;
}

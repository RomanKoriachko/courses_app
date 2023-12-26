export function checkInputValidation(
	inputsClass: string,
	messagesClass: string
) {
	const inputs = document.querySelectorAll(
		`.${inputsClass}`
	) as NodeListOf<HTMLInputElement> | null;
	const validationMessages = document.querySelectorAll(`.${messagesClass}`);

	console.log(inputs);

	for (let i = 0; i < inputs.length; i++) {
		if (!inputs[i].checkValidity()) {
			validationMessages[i].classList.add('show');
			inputs[i].classList.add('show');
		} else {
			validationMessages[i].classList.remove('show');
			inputs[i].classList.remove('show');
		}
	}
}

for (let type of ['text', 'password', 'email']) {
	for (let input of document.querySelectorAll('input[type="' + type + '"]')) {
		input.addEventListener('focus', (event) => onFocusField(event));
		input.addEventListener('blur', (event) => onBlur(event));
	}
}

/**
 * Событие при фокусе на инпута с вводом
 * @param {Event} event
 */
function onFocusField(event) {
	event.target
		.closest('div')
		.getElementsByTagName('label')[0]
		.classList.add('form__label_focused');
}

/**
 * Событие при снятии фокуса с инпута с вводом
 * @param {Event} event
 */
function onBlur(event) {
	if (event.target.value === '') {
		event.target.classList.remove('form__input_filled');
		event.target
			.closest('div')
			.getElementsByTagName('label')[0]
			.classList.remove('form__label_focused');
	} else {
		event.target.classList.add('form__input_filled');
	}
}
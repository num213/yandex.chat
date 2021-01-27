/**
 * Класс формы
 */
export default class Form {
	inputTypes = ['text', 'password', 'email', 'file'];

	/**
	 * Конструктор
	 * @param {HTMLElement} formElement
	 */
	constructor(formElement) {
		this.form = formElement;

		this.form.addEventListener('submit', (event) => this.onSubmit(event));

		for (let input of this.getInputs()) {
			if (this.hasLabel(input)) {
				input.addEventListener('focus', (event) => this.onFocusField(event.target));
				input.addEventListener('blur', (event) => this.onBlur(event.target));

				if (input.value) {
					this.onFocusField(input);
				}
			}
		}
	}

	/**
	 * Получить значения инпутов
	 * @return {*[]}
	 */
	getValues() {
		return Object.assign({}, ...Array.from(this.getInputs()).map(field => {
			return {[field.id]: field.value}
		}));
	}

	/**
	 * Получить список инпутов
	 * @return {[]}
	 */
	getInputs() {
		return Array
			.from(this.inputTypes)
			.map(type => Array.from(this.form.querySelectorAll('input[type="' + type + '"]')))
			.flat();
	}

	/**
	 * Событие при сабмите
	 * @param {event} event
	 */
	onSubmit(event) {
		event.preventDefault();
		console.log(this.getValues());
		window.location = event.target.action;
	}

	/**
	 * Событие при фокусе на инпута с вводом
	 * @param {HTMLElement} inputElement
	 */
	onFocusField(inputElement) {
		inputElement
			.closest('div')
			.getElementsByTagName('label')[0]
			.classList.add('form__label_focused');
	}

	/**
	 * Событие при снятии фокуса с инпута с вводом
	 * @param {HTMLElement} inputElement
	 */
	onBlur(inputElement) {
		if (inputElement.value === '') {
			inputElement.classList.remove('form__input_filled');
			inputElement
				.closest('div')
				.getElementsByTagName('label')[0]
				.classList.remove('form__label_focused');
		} else {
			inputElement.classList.add('form__input_filled');
		}
	}

	/**
	 * Есть ли у инпута связанный лейбл
	 * @param {HTMLElement} inputElement
	 * @return {boolean}
	 */
	hasLabel(inputElement) {
		return inputElement.closest('div') && inputElement.closest('div').getElementsByTagName('label').length > 0;
	}
}
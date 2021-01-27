const overlay = document.getElementById("modal-overlay");
const closeButtons = document.getElementsByClassName("modal__close");
const openButtons = document.getElementsByClassName("button_type_modal");

/**
 * Показ и скрытие модальных окон
 * @param {HTMLElement} element
 */
function toggleModal(element) {
	element.classList.toggle('modal_closed');
	overlay.classList.toggle('overlay_closed');

	if (element.classList.contains('modal_closed') === false
		&& element.querySelector('input[type=text]') !== null) {
		element.querySelector('input[type=text]').focus();
	}
}

overlay.addEventListener('click', () => {
	for (const modal of document.getElementsByClassName('modal')) {
		if (modal.classList.contains('modal_closed') === false) {
			toggleModal(modal);
		}
	}
});
for (const button of [...openButtons, ...closeButtons]) {
	button.addEventListener('click', (event) => {
		event.preventDefault();
		toggleModal(document.getElementById(event.currentTarget.dataset.target));
	});
}
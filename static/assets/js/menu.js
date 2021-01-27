/**
 * Показ и скрытие меню
 * @param {Event} event
 */
export function toggleMenu(event) {
	event.preventDefault();
	document.getElementById(event.currentTarget.dataset.target).classList.toggle('menu_closed');
}
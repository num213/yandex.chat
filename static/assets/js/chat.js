import { toggleMenu } from './menu.js';
import Form from "./form.js";

(function init () {
	setChatListHeight();

	const attachBtn = document.getElementById('message-attach-button');
	if (attachBtn) {
		attachBtn.addEventListener('click', (event) => toggleMenu(event));
	}

	window.onresize = () => setChatListHeight();
	window.onclick = function(event) {
		if (event.target.matches('#message-attach-button') === false) {
			for (let menu of document.getElementsByClassName('menu')) {
				if (menu.classList.contains('menu_closed') === false) {
					menu.classList.add('menu_closed');
				}
			}
		}
	}

	for (const chat of document.getElementsByClassName('chat-list__item')) {
		chat.addEventListener('click', () => window.location = '/chats');
	}

	for (const form of document.getElementsByTagName('form')) {
		new Form(form);
	}
})();

/**
 * Установить высоту контейнера со списком чатов,
 * основываясь на высоте окна браузера
 */
function setChatListHeight()
{
	const chatList = document.getElementById('chat-list');
	chatList.style.height = (window.innerHeight - chatList.getBoundingClientRect().top) + 'px';
}
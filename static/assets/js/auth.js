import Form from "./form.js";

(function init () {
	for (const form of document.getElementsByTagName('form')) {
		new Form(form);
	}
})();
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);

	const data = {
		name: formData.get('name'),
		email: formData.get('email'),
		phone: formData.get('phone'),
		subject: formData.get('subject'),
		message: formData.get('message')
	};

	alert(JSON.stringify(data, null, 2));
});

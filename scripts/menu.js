const menuContainer = document.querySelector('#menu-container');
const menuButton = document.querySelector('#menu-button');
const menuItems = menuContainer.querySelector('#menu-items');

menuButton.addEventListener('click', (e) => {
	const items = menuItems.children;

	if (menuContainer.classList.contains('-translate-x-[20dvw]')) {
		setTimeout(() => {
			for (let i = 0; i < items.length; i++) {
				setTimeout(() => {
					items[i].classList.remove('translate-y-full', 'opacity-0');
				}, i * 100);
			}
		}, 0);

		menuButton.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		`;

		menuContainer.classList.remove('-translate-x-[20dvw]');
	} else {
		setTimeout(() => {
			menuContainer.classList.add('-translate-x-[20dvw]');
			menuButton.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
				</svg>
			`;
		}, items.length * 100);

		for (let i = 0; i < items.length; i++) {
			setTimeout(() => {
				items[i].classList.add('translate-y-full', 'opacity-0');
			}, i * 100);
		}
	}
});

const categoriesGrid = document.querySelector('#categories-grid');

(async () => {
	const categories = await getAllCategories();

	categories.forEach((category) => {
		const categoryItem = document.createElement('li');

		categoryItem.classList.add('group', 'relative', 'rounded-xl', 'overflow-hidden');
		categoryItem.innerHTML = `
            <a href="category.html?name=${category.strCategory}">
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full h-auto aspect-square" />
                <div class="absolute inset-0 translate-y-full bg-[#FFFFFF90] flex flex-col justify-start items-center gap-2 p-4 transition group-hover:translate-y-0">
                    <p class="text-black text-2xl font-semibold">${category.strCategory}</p>
                    <p class="text-black text-sm text-center">${category.strCategoryDescription}</p>
                </div>
            </a>
        `;

		categoriesGrid.append(categoryItem);
	});

	document.querySelector('#loading-overlay').remove();
})();

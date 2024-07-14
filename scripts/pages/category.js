const mealsGrid = document.querySelector('#meals-grid');

(async () => {
	const meals = await getFilteredMeals('categories', CATEGORY_NAME);

	meals.forEach((meal) => {
		const mealItem = document.createElement('li');

		mealItem.classList.add('group', 'relative', 'rounded-xl', 'overflow-hidden');
		mealItem.innerHTML = `
            <a href="meal.html?id=${meal.idMeal}">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-auto aspect-square" />
                <div class="absolute inset-0 translate-y-full bg-[#FFFFFF90] flex flex-col justify-center items-start p-4 transition group-hover:translate-y-0">
					<p class="text-black text-2xl font-semibold">${meal.strMeal}</p>
                </div>
            </a>
        `;

		mealsGrid.append(mealItem);
	});

	document.querySelector('#loading-overlay').remove();
})();

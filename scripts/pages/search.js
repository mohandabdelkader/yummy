const searchByNameField = document.querySelector('#search-by-name');
const searchByFirstLetterField = document.querySelector('#search-by-first-letter');
const mealsGrid = document.querySelector('#meals-grid');

searchByNameField.addEventListener('change', async (e) => {
	const meals = await searchMeals('name', e.target.value);

	mealsGrid.innerHTML = '';

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
});

searchByFirstLetterField.addEventListener('change', async (e) => {
	const meals = await searchMeals('first-letter', e.target.value);

	mealsGrid.innerHTML = '';

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
});

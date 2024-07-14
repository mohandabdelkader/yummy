(async () => {
	const meal = await getMealDetails(MEAL_ID);

	document.querySelector('#meal-image').setAttribute('src', meal.strMealThumb);
	document.querySelector('#meal-name').innerHTML = meal.strMeal;
	document.querySelector('#meal-instructions').innerHTML = meal.strInstructions;
	document.querySelector('#meal-area').innerHTML = meal.strArea;
	document.querySelector('#meal-category').innerHTML = meal.strCategory;

	const mealRecipes = document.querySelector('#meal-recipes');
	const recipes = () => {
		const measures = Object.entries(meal).filter((entry) => entry[0].includes('strMeasure') && entry[1] && entry[1] !== ' ');
		const ingredients = Object.entries(meal).filter((entry) => entry[0].includes('strIngredient') && entry[1] && entry[1] !== ' ');

		const mergedArray = [];

		for (let i = 0; i < measures.length; i++) {
			const measure = measures[i][1].trim();
			const ingredient = ingredients[i][1].trim();
			mergedArray.push(`${measure} ${ingredient}`);
		}

		return mergedArray;
	};

	recipes().forEach((recipe) => {
		const recipeItem = document.createElement('li');

		recipeItem.classList.add('px-2', 'py-1', 'rounded-md', 'bg-emerald-100', 'text-emerald-700');
		recipeItem.innerHTML = recipe;

		mealRecipes.append(recipeItem);
	});

	const mealTags = document.querySelector('#meal-tags');
	const tags = meal.strTags ? meal.strTags.split(',') : [];

	tags.forEach((tag) => {
		const tagItem = document.createElement('li');

		tagItem.classList.add('px-2', 'py-1', 'rounded-md', 'bg-red-100', 'text-red-700');
		tagItem.innerHTML = tag.trim();

		mealTags.append(tagItem);
	});

	document.querySelector('#meal-source').setAttribute('href', meal.strSource);
	document.querySelector('#meal-youtube').setAttribute('href', meal.strYoutube);

	document.querySelector('#loading-overlay').remove();
})();

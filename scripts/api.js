const BASE_URL = 'https://www.themealdb.com/api/json/v1';
const API_KEY = '1';
const ENDPOINTS = {
	search: 'search.php',
	lookup: 'lookup.php',
	filter: 'filter.php',
	list: 'list.php',
	categories: 'categories.php'
};

const getAllMeals = async () => {
	const URL = `${BASE_URL}/${API_KEY}/${ENDPOINTS.search}?s=`;

	const response = await fetch(URL, { method: 'GET' });
	const data = await response.json();

	return data.meals;
};

const getMealDetails = async (id) => {
	const URL = `${BASE_URL}/${API_KEY}/${ENDPOINTS.lookup}?i=${id}`;

	const response = await fetch(URL, { method: 'GET' });
	const data = await response.json();

	return data.meals[0];
};

const searchMeals = async (searchBy, value) => {
	let url = `${BASE_URL}/${API_KEY}/${ENDPOINTS.search}?`;

	if (searchBy === 'name' && value) url += `s=${value}`;
	else if (searchBy === 'first-letter' && value) url += `f=${value}`;
	else return;

	const response = await fetch(url, { method: 'GET' });
	const data = await response.json();

	return data.meals;
};

const getAllCategories = async () => {
	const URL = `${BASE_URL}/${API_KEY}/${ENDPOINTS.categories}`;

	const response = await fetch(URL, { method: 'GET' });
	const data = await response.json();

	return data.categories;
};

const getList = async (listBy) => {
	let url = `${BASE_URL}/${API_KEY}/${ENDPOINTS.list}?`;

	if (listBy === 'areas') url += 'a=list';
	else if (listBy === 'ingredients') url += 'i=list';
	else return;

	const response = await fetch(url, { method: 'GET' });
	const data = await response.json();

	return data.meals;
};

const getFilteredMeals = async (filterBy, name) => {
	let url = `${BASE_URL}/${API_KEY}/${ENDPOINTS.filter}?`;

	if (filterBy === 'categories') url += `c=${name}`;
	else if (filterBy === 'areas') url += `a=${name}`;
	else if (filterBy === 'ingredients') url += `i=${name}`;
	else return;

	const response = await fetch(url, { method: 'GET' });
	const data = await response.json();

	return data.meals;
};

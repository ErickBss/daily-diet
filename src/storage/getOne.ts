import { getAll } from './getAll';

export async function getOne(id: number) {
	try {
		const meals = await getAll();

		return meals.find((meal) => meal.id === id);
	} catch (error) {
		throw error;
	}
}

import { MealDTO } from '@storage/dto/meal';

export function calcPercentage(meals: MealDTO[]) {
	const positiveAmount = meals.filter(
		(meal) => meal.status === 'positive',
	)?.length;

	const percentage = (positiveAmount / meals.length) * 100;

	return parseFloat(percentage.toFixed(2));
}

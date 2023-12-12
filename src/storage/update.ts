import AsyncStorage from '@react-native-async-storage/async-storage';
import { CreateMealDTO } from './dto/meal';
import { getAll } from './getAll';
import { MEAL_COLLECTION } from './config';

export async function update(id: number, data: CreateMealDTO) {
	try {
		const meals = await getAll();
		const updated = meals.map((meal) => {
			if (meal.id === id) return { id, ...data };

			return meal;
		});

		await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updated));
	} catch (error) {
		throw error;
	}
}

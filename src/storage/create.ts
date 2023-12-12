import AsyncStorage from '@react-native-async-storage/async-storage';
import { CreateMealDTO } from './dto/meal';
import { getAll } from './getAll';
import { MEAL_COLLECTION } from './config';

export async function createMeal(newMeal: CreateMealDTO) {
	try {
		const meals = await getAll();
		const lastId = meals?.[0]?.id || 0;

		await AsyncStorage.setItem(
			MEAL_COLLECTION,
			JSON.stringify([{ id: lastId + 1, ...newMeal }, ...meals]),
		);
	} catch (error) {
		throw error;
	}
}

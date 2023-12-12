import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAll } from './getAll';
import { MEAL_COLLECTION } from './config';

export async function remove(id: number) {
	try {
		const meals = await getAll();
		const filtered = meals.filter((meal) => meal.id !== id);

		await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filtered));
	} catch (error) {
		throw error;
	}
}

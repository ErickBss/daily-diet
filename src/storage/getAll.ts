import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './config';
import { MealDTO } from './dto/meal';

export async function getAll() {
	try {
		const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);
		const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

		return meals;
	} catch (error) {
		throw error;
	}
}

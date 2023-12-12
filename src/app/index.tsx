import { Button } from '@components/button';

import { MealItem } from '@components/mealItem';
import { NunitoText } from '@components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Summary } from '@components/summary';
import { LogoSvg } from 'src/assets/svg/logoSvg';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { MealDTO } from '@storage/dto/meal';
import { getAll } from '@storage/getAll';
import { FlatList } from 'react-native-gesture-handler';
import { EmptyList } from '@components/emptyList';
import { calcPercentage } from '@utils/functions';
import { Loading } from '@components/loading';

export default function Home() {
	const [meals, setMeals] = useState<MealDTO[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchMeals() {
		try {
			setIsLoading(true);
			await getAll().then(setMeals);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	function verifyIfDateIsDifferent(current: string, previous?: string) {
		if (!previous) return true;

		if (current === previous) return false;

		return true;
	}

	useFocusEffect(
		useCallback(() => {
			fetchMeals();
		}, []),
	);

	return (
		<SafeAreaView className="px-5">
			<View className="w-full justify-between items-center py-4 flex-row">
				<LogoSvg />

				<View className="w-10 h-10 border-2 border-gray-700 rounded-full items-center justify-center bg-gray-400">
					<NunitoText>E</NunitoText>
				</View>
			</View>

			<Summary percentage={calcPercentage(meals)} className="mt-5" />

			<NunitoText className="mt-8 text-gray-700 text-base mb-1">
				Refeições
			</NunitoText>

			<Button
				text="Nova refeição"
				icon="plus"
				className="mb-3"
				onPress={() => router.push('/create')}
			/>

			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={meals}
					keyExtractor={(item) => item?.id?.toString()}
					renderItem={({ item: meal, index }) => (
						<MealItem
							id={meal.id}
							hour={meal.hour}
							name={meal.name}
							status={meal.status}
							date={meal.date}
							renderDateLabel={verifyIfDateIsDifferent(
								meal.date,
								meals?.[index - 1]?.date,
							)}
						/>
					)}
					ListEmptyComponent={() => (
						<EmptyList message="Adicione uma refeição" />
					)}
				/>
			)}
		</SafeAreaView>
	);
}

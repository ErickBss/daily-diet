import { Box } from '@components/box';
import { NunitoText } from '@components/StyledText';
import { View } from 'react-native';
import { colors } from '@utils/theme';
import { Header } from '@components/header';
import { useCallback, useState } from 'react';
import { MealDTO } from '@storage/dto/meal';
import { getAll } from '@storage/getAll';
import { useFocusEffect } from 'expo-router';
import { Loading } from '@components/loading';
import { calcPercentage } from '@utils/functions';
import { positiveLimit } from '@components/summary';

export default function Analytics() {
	const [meals, setMeals] = useState<MealDTO[]>([]);
	const [percentage, setPercentage] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchMeals() {
		try {
			setIsLoading(true);
			await getAll().then((response) => {
				setMeals(response);
				setPercentage(calcPercentage(response));
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	function getBestSequency() {
		let best = 0;
		let currentSequency = 0;

		meals.forEach((meal) => {
			if (meal.status === 'positive') {
				currentSequency++;
			} else {
				if (currentSequency > best) {
					best = currentSequency;
				}
				currentSequency = 0;
			}
		});

		return best;
	}

	useFocusEffect(
		useCallback(() => {
			fetchMeals();
		}, []),
	);
	return (
		<View
			className={`pt-5 flex-1 ${
				percentage > positiveLimit ? 'bg-green-light' : 'bg-red-light'
			}`}
		>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<Header
						iconColor={
							percentage > positiveLimit
								? colors['green-dark']
								: colors['red-dark']
						}
					>
						<View className="flex-col">
							<NunitoText className="font-bold text-4xl text-gray-700 text-center">
								{percentage}%
							</NunitoText>
							<NunitoText className="text-base text-gray-600 text-center">
								das refeições dentro da dieta
							</NunitoText>
						</View>
					</Header>

					<View className=" bg-white flex-1 mt-8 rounded-t-3xl py-10 items-center">
						<View className="px-4 justify-center items-center w-full">
							<NunitoText className="text-gray-700 text-base font-bold mb-6">
								Estatísticas gerais
							</NunitoText>

							<Box className="mb-3">
								<NunitoText className="text-gray-700 font-bold text-2xl">
									{getBestSequency()}
								</NunitoText>
								<NunitoText className="text-gray-600 text-base mt-2">
									melhor sequência de pratos dentro da dieta
								</NunitoText>
							</Box>

							<Box className="mb-3">
								<NunitoText className="text-gray-700 font-bold text-2xl">
									{meals.length}
								</NunitoText>
								<NunitoText className="text-gray-600 text-base mt-2">
									refeições registradas
								</NunitoText>
							</Box>

							<View className="flex-row w-full">
								<Box type="positive" className="flex-1 mr-3">
									<NunitoText className="text-gray-700 font-bold text-2xl">
										{meals.filter((meal) => meal.status === 'positive').length}
									</NunitoText>
									<NunitoText className="text-gray-600 text-base mt-2 text-center">
										refeições dentro da dieta
									</NunitoText>
								</Box>

								<Box type="negative" className="flex-1">
									<NunitoText className="text-gray-700 font-bold text-2xl">
										{meals.filter((meal) => meal.status === 'negative').length}
									</NunitoText>
									<NunitoText className="text-gray-600 text-base mt-2 text-center">
										refeições fora da dieta
									</NunitoText>
								</Box>
							</View>
						</View>
					</View>
				</>
			)}
		</View>
	);
}

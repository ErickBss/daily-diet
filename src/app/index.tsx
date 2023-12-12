import { Button } from '@components/button';

import { MealItem } from '@components/mealItem';
import { NunitoText } from '@components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { Summary } from '@components/summary';
import dayjs from 'dayjs';
import { LogoSvg } from 'src/assets/svg/logoSvg';
import { router } from 'expo-router';

export type MealItemProps = {
	name: string;
	hour: string;
	date: string;
	status: 'positive' | 'negative';
};

const meals: MealItemProps[] = [
	{
		name: 'X-tudo',
		hour: '20:00',
		date: dayjs().toISOString(),
		status: 'negative',
	},
	{
		name: 'Whey',
		hour: '16:00',
		date: dayjs().toISOString(),
		status: 'positive',
	},
	{
		name: 'Salada cesar com frango grelhado',
		hour: '12:30',
		date: dayjs().toISOString(),
		status: 'positive',
	},
	{
		name: 'Batata frita',
		hour: '12:30',
		date: dayjs().subtract(1, 'day').toISOString(),
		status: 'negative',
	},
	{
		name: 'Banana com aveia',
		hour: '16:00',
		date: dayjs().subtract(1, 'day').toISOString(),
		status: 'positive',
	},
	{
		name: 'Pizza',
		hour: '16:00',
		date: dayjs().subtract(1, 'day').toISOString(),
		status: 'negative',
	},
	{
		name: 'Bolo',
		hour: '16:00',
		date: dayjs().subtract(1, 'day').toISOString(),
		status: 'negative',
	},
];

export default function Home() {
	function verifyIfDateIsDifferent(current: string, previous?: string) {
		if (!previous) return true;

		if (dayjs(current).isSame(previous, 'day')) return false;

		return true;
	}

	return (
		<SafeAreaView className="px-5">
			<ScrollView showsVerticalScrollIndicator={false} className="mb-10">
				<View className="w-full justify-between items-center py-4 flex-row">
					<LogoSvg />

					<View className="w-10 h-10 border-2 border-gray-700 rounded-full items-center justify-center bg-gray-400">
						<NunitoText>E</NunitoText>
					</View>
				</View>

				<Summary percentage={70.82} className="mt-5" />

				<NunitoText className="mt-8 text-gray-700 text-base mb-1">
					Refeições
				</NunitoText>

				<Button
					text="Nova refeição"
					icon="plus"
					className="mb-3"
					onPress={() => router.push('/create')}
				/>

				{meals.map((meal, index) => (
					<MealItem
						key={meal.name}
						hour={meal.hour}
						name={meal.name}
						status={meal.status}
						date={meal.date}
						renderDateLabel={verifyIfDateIsDifferent(
							meal.date,
							meals?.[index - 1]?.date,
						)}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

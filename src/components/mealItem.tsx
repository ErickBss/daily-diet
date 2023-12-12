import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { NunitoText } from './StyledText';
import dayjs from 'dayjs';
import { tv } from 'tailwind-variants';
import { router } from 'expo-router';
import { MealDTO } from '@storage/dto/meal';

type DataProps = {
	id: number;
	name: string;
	date: string;
	hour: string;
	status: 'positive' | 'negative';
	renderDateLabel?: boolean;
};

const statusIndicator = tv({
	base: 'w-4 h-4 rounded-full',
	variants: {
		status: {
			positive: 'bg-green',
			negative: 'bg-red',
		},
	},
});

export function MealItem({
	id,
	hour,
	name,
	status,
	date,
	renderDateLabel = false,
}: DataProps) {
	function formatDate() {
		let parsedDate = '';
		date
			.split('/')
			.reverse()
			.forEach((item, index) => {
				parsedDate += item;
				if (index !== 2) parsedDate += '-';
			});

		return dayjs(parsedDate).format('DD.MM.YY');
	}
	return (
		<>
			{renderDateLabel && (
				<NunitoText className="mt-4 mb-2 font-bold text-gray-700 text-lg">
					{formatDate()}
				</NunitoText>
			)}
			<TouchableOpacity
				onPress={() => router.push({ pathname: '/meal/[id]', params: { id } })}
				className="w-full rounded-md mb-2 flex-row p-3 items-center border border-gray-400"
			>
				<View className="flex-row justify-start items-center flex-1">
					<NunitoText className="text-sm text-gray-700 font-bold pr-2 border-r border-gray-500">
						{hour}
					</NunitoText>
					<NunitoText className="text-base text-gray-600 ml-2 w-11/12">
						{name}
					</NunitoText>
				</View>

				<View className={statusIndicator({ status })} />
			</TouchableOpacity>
		</>
	);
}

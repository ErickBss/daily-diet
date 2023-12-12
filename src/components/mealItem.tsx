import {
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MealItemProps } from 'src/app';
import { NunitoText } from './StyledText';
import dayjs from 'dayjs';
import { tv } from 'tailwind-variants';
import { router } from 'expo-router';

type DataProps = TouchableOpacityProps &
	MealItemProps & {
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
	hour,
	name,
	status,
	date,
	renderDateLabel = false,
	...rest
}: DataProps) {
	return (
		<>
			{renderDateLabel && (
				<NunitoText className="mt-4 mb-2 font-bold text-gray-700 text-lg">
					{dayjs(date).format('DD.MM.YY')}
				</NunitoText>
			)}
			<TouchableOpacity
				{...rest}
				onPress={() =>
					router.push({ pathname: '/meal/[id]', params: { id: name } })
				}
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

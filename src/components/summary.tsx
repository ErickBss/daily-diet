import { View, ViewProps } from 'react-native';

import { ButtonIcon } from './buttonIcon';
import { NunitoText } from './StyledText';
import { colors } from '@utils/theme';
import { router } from 'expo-router';
import { tv } from 'tailwind-variants';

const positiveLimit = 60;

type SummaryProps = ViewProps & {
	percentage: number;
};

const summary = tv({
	base: 'w-full h-[110px] p-2 rounded-lg',
	variants: {
		status: {
			positive: 'bg-green-light',
			negative: 'bg-red-light',
		},
	},
});

export function Summary({ percentage, ...rest }: SummaryProps) {
	const status = percentage >= positiveLimit ? 'positive' : 'negative';

	return (
		<View
			{...rest}
			className={summary({
				status,
			})}
		>
			<ButtonIcon
				icon="arrow-up-right"
				color={
					status === 'positive' ? colors['green-dark'] : colors['red-dark']
				}
				onPress={() => router.push('/analytics')}
				className="self-end"
			/>

			<NunitoText className="font-bold text-4xl text-gray-700 text-center">
				{percentage}%
			</NunitoText>
			<NunitoText className="text-sm text-gray-600 text-center">
				das refeições dentro da dieta
			</NunitoText>
		</View>
	);
}

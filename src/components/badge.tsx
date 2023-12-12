import { ViewProps, View } from 'react-native';
import { tv } from 'tailwind-variants';
import { NunitoText } from './StyledText';

type BadgeProps = ViewProps & {
	type: 'positive' | 'negative';
	text: string;
};

const indicator = tv({
	base: 'w-2 h-2 mr-2 rounded-full',
	variants: {
		type: {
			positive: 'bg-green-dark',
			negative: 'bg-red-dark',
		},
	},
});

export function Badge({ type, text, ...rest }: BadgeProps) {
	return (
		<View
			className="py-2 px-4 bg-gray-200 rounded-full flex-row items-center block"
			{...rest}
		>
			<View className={indicator({ type })} />
			<NunitoText className="text-sm text-gray-700">{text}</NunitoText>
		</View>
	);
}

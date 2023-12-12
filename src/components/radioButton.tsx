import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { tv } from 'tailwind-variants';
import { NunitoText } from './StyledText';

const button = tv({
	base: 'bg-gray-200 rounded-md flex-1 px-4 py-5 justify-center items-center flex-row',
	variants: {
		type: {
			negative: 'border border-red-dark bg-red-light',
			positive: 'border border-green-dark bg-green-light',
		},
	},
});

const indicator = tv({
	base: 'w-2 h-2 mr-2 rounded-full',
	variants: {
		type: {
			positive: 'bg-green-dark',
			negative: 'bg-red-dark',
		},
	},
});

type RadioButtonProps = TouchableOpacityProps & {
	type: 'negative' | 'positive';
	selected?: boolean;
	text: string;
};

export function RadioButton({
	type,
	selected,
	text,
	...rest
}: RadioButtonProps) {
	return (
		<TouchableOpacity {...rest} className={button(selected ? { type } : {})}>
			<View className={indicator({ type })} />
			<NunitoText className="text-sm font-bold">{text}</NunitoText>
		</TouchableOpacity>
	);
}

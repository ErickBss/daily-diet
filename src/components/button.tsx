import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { NunitoText } from './StyledText';
import { colors } from '@utils/theme';
import { tv } from 'tailwind-variants';

type ButtonProps = TouchableOpacityProps & {
	icon?: keyof typeof Feather.glyphMap;
	type?: 'primary' | 'outline';
	text: string;
};

const button = tv({
	base: 'justify-center items-center p-4 rounded-md flex-row',
	variants: {
		color: {
			primary: 'bg-gray-700',
			outline: 'bg-white border border-gray-700',
		},
	},
});

const content = tv({
	base: 'text-white font-bold text-sm',
	variants: {
		color: {
			primary: 'text-white',
			outline: 'text-gray-700',
		},
	},
});

export function Button({ icon, text, type = 'primary', ...rest }: ButtonProps) {
	return (
		<TouchableOpacity {...rest} className={button({ color: type })}>
			{icon && (
				<Feather
					size={18}
					color={type === 'primary' ? colors.white : colors.gray[700]}
					name={icon}
					style={{ marginRight: icon ? 8 : 0 }}
				/>
			)}
			<NunitoText className={content({ color: type })}>{text}</NunitoText>
		</TouchableOpacity>
	);
}

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { NunitoText } from './StyledText';
import { colors } from '@utils/theme';

type ButtonProps = TouchableOpacityProps & {
	icon?: keyof typeof Feather.glyphMap;
	text: string;
};

export function Button({ icon, text, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			{...rest}
			className="justify-center items-center p-4 rounded-md bg-gray-700 flex-row"
		>
			{icon && (
				<Feather
					size={18}
					color={colors.white}
					name={icon}
					style={{ marginRight: icon ? 8 : 0 }}
				/>
			)}
			<NunitoText className="text-white font-bold text-sm">{text}</NunitoText>
		</TouchableOpacity>
	);
}

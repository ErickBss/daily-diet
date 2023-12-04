import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

type ButtonIconProps = TouchableOpacityProps & {
	icon: keyof typeof Feather.glyphMap;
	size?: number;
	color?: string;
};

export function ButtonIcon({
	icon,
	size = 24,
	color,
	...rest
}: ButtonIconProps) {
	return (
		<TouchableOpacity {...rest}>
			<Feather name={icon} size={size} color={color} />
		</TouchableOpacity>
	);
}

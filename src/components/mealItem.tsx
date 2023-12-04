import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { NunitoText } from './StyledText';

type MealItemProps = TouchableOpacityProps & {
	name: string;
	hour: string;
};

export function MealItem() {}

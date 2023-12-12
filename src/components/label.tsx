import { TextProps } from 'react-native';
import { NunitoText } from './StyledText';

export function Label({ ...rest }: TextProps) {
	return (
		<NunitoText {...rest} className="text-gray-600 font-bold text-sm mb-1" />
	);
}

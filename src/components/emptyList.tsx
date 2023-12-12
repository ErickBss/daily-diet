import { View } from 'react-native';
import { NunitoText } from './StyledText';

type EmptyListProps = {
	message: string;
};

export function EmptyList({ message }: EmptyListProps) {
	return (
		<View className="flex-1 justify-center items-center">
			<NunitoText className="text-center text-sm font-regular text-gray-500">
				{message}
			</NunitoText>
		</View>
	);
}

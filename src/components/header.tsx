import { LogoSvg } from 'src/assets/svg/logoSvg';
import { NunitoText } from './StyledText';
import { View } from 'react-native';

export function Header() {
	return (
		<View className="w-full justify-between items-center py-4 flex-row">
			<LogoSvg />

			<View className="w-10 h-10 border-2 border-gray-700 rounded-full items-center justify-center bg-gray-400">
				<NunitoText>E</NunitoText>
			</View>
		</View>
	);
}

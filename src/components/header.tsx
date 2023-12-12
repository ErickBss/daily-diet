import { LogoSvg } from 'src/assets/svg/logoSvg';
import { NunitoText } from './StyledText';
import { View } from 'react-native';
import {
	SafeAreaView,
	SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { ButtonIcon } from './buttonIcon';
import { colors } from '@utils/theme';
import { router } from 'expo-router';

type HeaderProps = SafeAreaViewProps & {
	iconColor?: string;
	children: React.ReactNode;
};

export function Header({
	iconColor = colors.gray[600],
	children,
	...rest
}: HeaderProps) {
	return (
		<SafeAreaView className="px-4" {...rest}>
			<ButtonIcon
				icon="arrow-left"
				color={iconColor}
				onPress={() => router.back()}
			/>
			{children}
		</SafeAreaView>
	);
}

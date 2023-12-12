import { NunitoText } from '@components/StyledText';
import { Button } from '@components/button';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PositiveImg from '@assets/positive.png';
import { router } from 'expo-router';

export default function CreatedPositive() {
	return (
		<SafeAreaView className="flex-1 justify-center items-center">
			<NunitoText className="font-bold text-2xl text-green-dark">
				Continue assim!
			</NunitoText>
			<View className="flex-row items-baseline">
				<NunitoText className="text-base text-gray-700">
					Você continua
				</NunitoText>
				<NunitoText className="font-bold text-base">
					{' '}
					dentro da dieta
				</NunitoText>
				<NunitoText className="text-base text-gray-700">
					. Muito bem!
				</NunitoText>
			</View>

			<Image className="my-10" source={PositiveImg} />

			<Button
				text="Ir para a página inicial"
				onPress={() => router.push('/')}
			/>
		</SafeAreaView>
	);
}

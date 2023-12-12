import { NunitoText } from '@components/StyledText';
import { Button } from '@components/button';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NegativeImg from '@assets/negative.png';
import { router } from 'expo-router';

export default function CreatedNegative() {
	return (
		<SafeAreaView className="flex-1 justify-center items-center">
			<NunitoText className="font-bold text-2xl text-red-dark">
				Que pena!
			</NunitoText>
			<View className="flex-row items-baseline justify-center flex-wrap w-10/12">
				<NunitoText className="text-base text-gray-700">Você</NunitoText>
				<NunitoText className="font-bold text-base"> saiu da dieta</NunitoText>
				<NunitoText className="text-base text-gray-700">
					{' '}
					dessa vez, mas continue
				</NunitoText>
				<NunitoText className="text-base text-gray-700">
					se esforçando e não desista!
				</NunitoText>
			</View>

			<Image className="my-10" source={NegativeImg} />

			<Button
				text="Ir para a página inicial"
				onPress={() => router.push('/')}
			/>
		</SafeAreaView>
	);
}

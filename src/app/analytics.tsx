import { Box } from '@components/box';
import { ButtonIcon } from '@components/buttonIcon';
import { NunitoText } from '@components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { colors } from '@utils/theme';
import { router } from 'expo-router';
import { Header } from '@components/header';

export default function Analytics() {
	return (
		<View className="bg-red-light pt-5 flex-1">
			<Header iconColor={colors['red-dark']}>
				<View className="flex-col">
					<NunitoText className="font-bold text-4xl text-gray-700 text-center">
						60%
					</NunitoText>
					<NunitoText className="text-base text-gray-600 text-center">
						das refeições dentro da dieta
					</NunitoText>
				</View>
			</Header>

			<View className=" bg-white flex-1 mt-8 rounded-t-3xl py-10 items-center">
				<View className="px-4 justify-center items-center w-full">
					<NunitoText className="text-gray-700 text-base font-bold mb-6">
						Estatísticas gerais
					</NunitoText>

					<Box className="mb-3">
						<NunitoText className="text-gray-700 font-bold text-2xl">
							4
						</NunitoText>
						<NunitoText className="text-gray-600 text-base mt-2">
							melhor sequência de pratos dentro da dieta
						</NunitoText>
					</Box>

					<Box className="mb-3">
						<NunitoText className="text-gray-700 font-bold text-2xl">
							109
						</NunitoText>
						<NunitoText className="text-gray-600 text-base mt-2">
							refeições registradas
						</NunitoText>
					</Box>

					<View className="flex-row w-full">
						<Box type="positive" className="flex-1 mr-3">
							<NunitoText className="text-gray-700 font-bold text-2xl">
								32
							</NunitoText>
							<NunitoText className="text-gray-600 text-base mt-2 text-center">
								refeições dentro da dieta
							</NunitoText>
						</Box>

						<Box type="negative" className="flex-1">
							<NunitoText className="text-gray-700 font-bold text-2xl">
								77
							</NunitoText>
							<NunitoText className="text-gray-600 text-base mt-2 text-center">
								refeições fora da dieta
							</NunitoText>
						</Box>
					</View>
				</View>
			</View>
		</View>
	);
}

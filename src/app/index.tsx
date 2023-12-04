import { Button } from '@components/button';
import { Header } from '@components/header';
import { NunitoText } from '@components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Summary } from '@components/summary';

export default function Home() {
	return (
		<SafeAreaView className="px-5">
			<Header />
			<Summary percentage={70.82} className="mt-5" />

			<NunitoText className="mt-8 text-gray-700 text-base mb-1">
				Refeições
			</NunitoText>
			<Button text="Nova refeição" icon="plus" />
		</SafeAreaView>
	);
}

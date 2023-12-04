import { NunitoText } from '@components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
	return (
		<SafeAreaView>
			<NunitoText className="text-red-dark text-xl font-bold">Hello</NunitoText>
		</SafeAreaView>
	);
}

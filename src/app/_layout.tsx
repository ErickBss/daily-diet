import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
	useFonts,
} from '@expo-google-fonts/nunito-sans';

import { Stack } from 'expo-router';

export default function RootLayout() {
	const [fontLoaded, fontError] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	});

	if (fontError) {
		throw fontError;
	}

	if (!fontLoaded) {
		return null;
	}

	return <Stack />;
}

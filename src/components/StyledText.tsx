import { Text, TextProps } from 'react-native';

export function NunitoText(props: TextProps) {
	return (
		<Text
			{...props}
			style={[props.style, { fontFamily: 'NunitoSans_400Regular' }]}
		/>
	);
}

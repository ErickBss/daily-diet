import { TextInput, TextInputProps } from 'react-native';
import { NunitoText } from './StyledText';
import { colors } from '@utils/theme';

export function Input({
	errorMessage,
	...rest
}: TextInputProps & { errorMessage?: string }) {
	return (
		<>
			<TextInput
				{...rest}
				className="py-3 px-4 border border-gray-300 rounded-md text-gray-700"
				placeholderTextColor={colors.gray[400]}
			/>
			{errorMessage && (
				<NunitoText className="text-sm text-red-dark mt-1">
					{errorMessage}
				</NunitoText>
			)}
		</>
	);
}

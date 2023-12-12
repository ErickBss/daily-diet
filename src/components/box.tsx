import { View, ViewProps } from 'react-native';

import { tv } from 'tailwind-variants';

type BoxProps = ViewProps & { type?: 'neutral' | 'positive' | 'negative' };

const box = tv({
	base: 'w-full rounded-lg justify-center items-center p-5',
	variants: {
		type: {
			positive: 'bg-green-light',
			negative: 'bg-red-light',
			neutral: 'bg-gray-200',
		},
	},
});

export function Box({ type = 'neutral', ...rest }: BoxProps) {
	return <View {...rest} className={box({ type })} />;
}

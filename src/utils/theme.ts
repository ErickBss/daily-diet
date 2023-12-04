import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';
const config = resolveConfig(tailwindConfig);

export const colors = config.theme?.colors as any;

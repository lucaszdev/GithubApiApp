import { useColorScheme } from '@modules';

export const isDarkMode = (): boolean => useColorScheme() === 'dark';

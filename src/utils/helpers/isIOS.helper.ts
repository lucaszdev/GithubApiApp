import { Platform } from '@modules';

export const isIOS = (): boolean => Platform.OS === 'ios';

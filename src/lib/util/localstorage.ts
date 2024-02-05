import { browser } from '$app/environment';
import type { UserPalType } from './pal';

const KEY = 'pal-combination';

export const getPals = (): UserPalType[] => {
	if (browser) {
		return JSON.parse(localStorage.getItem('pal-combination') ?? '[]');
	}
	return [];
};

export const registerPal = (pals: UserPalType[]) => {
	if (browser) {
		localStorage.setItem(KEY, JSON.stringify(pals));
		console.log(JSON.parse(localStorage.getItem('pal-combination') ?? '[]'));
	}
};

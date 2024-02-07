import { browser } from '$app/environment';
import type { PalType, UserPalType } from './pal';

const KEY = 'pal-combination';
const NOT_HAVE_PAL_KEY = `${KEY}-not-have`;

export const getPals = (): UserPalType[] => {
	if (browser) {
		return JSON.parse(localStorage.getItem(KEY) ?? '[]');
	}
	return [];
};

export const registerPal = (pals: UserPalType[]) => {
	if (browser) {
		localStorage.setItem(KEY, JSON.stringify(pals));
	}
};

export const registerNotHavePals = (pals: PalType[]) => {
	if (browser) {
		localStorage.setItem(NOT_HAVE_PAL_KEY, JSON.stringify(pals));
	}
};

export const getNotHavePals = (): PalType[] => {
	if (browser) {
		return JSON.parse(localStorage.getItem(NOT_HAVE_PAL_KEY) ?? '[]');
	}
	return [];
};

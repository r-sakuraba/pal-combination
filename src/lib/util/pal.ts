import type { Skill } from './skil';
import { base } from '$app/paths';

export type PalType = {
	id: string;
	name: string;
	en: string;
	alias?: string;
};

export type CombiPalType = {
	histories?: CombiHistory[];
} & (PalType | UserPalType);

export type UserPalType = {
	/** 1: male, 2: female */
	gender: number;
	skills: Skill[];
	createdAt: number;
} & PalType;

export type CombiHistory = [CombiPalType, CombiPalType];

export type PalMap = {
	[key: string]: PalType;
};

export interface ParentToChildMap {
	[key: string]: { [key: string]: string };
}

export type ParentChildToOtherParentsMap = {
	[key: string]: { [key: string]: string[] };
};

export type ChildToParentsMap = {
	[key: string]: [string, string][];
};

export const getDisplayPalFullName = (pal: PalType) => `No.${pal.id} ${pal.name}`;
const getFormatPalId = (pal: PalType) => {
	const hasB = pal.id.includes('B');
	return pal.id.padStart(hasB ? 4 : 3, '0');
};
export const getImgPath = (pal: PalType) =>
	pal ? `${base}/img/${getFormatPalId(pal)}_${pal.en}.webp` : '';
export const isUserPal = (pal: CombiPalType) => 'gender' in pal;

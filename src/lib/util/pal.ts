import type { Skil } from './skil';

export type PalType = {
	id: string;
	name: string;
	alias?: string;
};

export type CombiPalType = {
	histories?: CombiHistory[];
} & PalType;

export type UserPalType = {
	/** 1: male, 2: female */
	gender: number;
	skils: Skil[];
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

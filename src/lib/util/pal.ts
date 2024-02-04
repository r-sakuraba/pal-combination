export type Pal = {
	id: string;
	name: string;
};

export type PalMap = {
	[key: string]: Pal;
};

export interface Combination {
	[key: string]: { [key: string]: string };
}

export type ReverseCombination = {
	[key: string]: string[][];
};

export const getDisplayPalFullName = (pal: Pal) => `No.${pal.id} ${pal.name}`;

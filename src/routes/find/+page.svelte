<script lang="ts">
	import _findCombinations from '$lib/assets/findCombination.json';
	import _pals from '$lib/assets/pal.json';
	import _skilList from '$lib/assets/skil.json';
	import * as storage from '$lib/util/localstorage';
	import type { CombiPalType, PalType, PalMap, ParentChildToOtherParentsMap } from '$lib/util/pal';
	import { getDisplayPalFullName } from '$lib/util/pal';
	import type { Skil } from '$lib/util/skil';
	import CombiPal from '../CombiPal.svelte';

	const otherParentsMap = _findCombinations as ParentChildToOtherParentsMap;
	const palMap = _pals as PalMap;

	const hasPals = storage.getPals();

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	let promise: Promise<void>;

	let targetPal: PalType;
	let targetSkil: Skil;
	let result: CombiPalType[] | undefined = [];

	async function searchPal() {
		await sleep(0);
		result = [];
		const nextQueue: CombiPalType[] = [];
		nextQueue.push(
			...hasPals.filter((pal) => pal.skils.some((skil) => skil.name === targetSkil.name))
		);
		let searchedPal: Set<string> = new Set();
		let count = 1;

		while (nextQueue.length && result.length === 0 && count < 7) {
			const queue: CombiPalType[] = [...nextQueue];
			searchedPal = new Set([...searchedPal, ...queue.map((pal) => pal.name)]);

			const skipCount: { [name: string]: number } = {};
			while (queue.length && result.length < 31) {
				const target: CombiPalType = queue.shift() as CombiPalType;
				if (skipCount[target.name] > 30) {
					continue;
				} else {
					skipCount[target.name] = (skipCount[target.name] ?? 0) + 1;
				}
				// console.log(target, willFindPal);
				if (otherParentsMap[target.name]?.[targetPal.name]) {
					result.push(
						...otherParentsMap[target.name]?.[targetPal.name]?.map<CombiPalType>((comb) => {
							return {
								...palMap[targetPal.name],
								histories: [[target, palMap[comb]]]
							};
						})
					);
				}

				nextQueue.push(
					...Object.entries(otherParentsMap[target.name] ?? [])
						.filter(([child, parents]) => !searchedPal.has(child))
						.map<CombiPalType>(([child, parents]) => ({
							...palMap[child],
							histories: parents.map((parent) => [target, palMap[parent]])
						}))
				);
			}
			count++;
		}
		// console.log(findResult);
		result = result.length > 0 ? result : undefined;
	}

	function executeSearch() {
		promise = searchPal();
	}
</script>

<p>探索</p>
<p>{targetPal ? getDisplayPalFullName(targetPal) : ''}</p>
<select bind:value={targetPal}>
	{#each Object.values(_pals) as pal}
		<option value={pal}>{getDisplayPalFullName(pal)}</option>
	{/each}
</select>
<div>パッシブスキル</div>
<div>
	<select bind:value={targetSkil}>
		{#each _skilList as skilCandidate}
			<option value={skilCandidate}>{skilCandidate.name}</option>
		{/each}
	</select>
</div>
<button on:click={executeSearch}>探索開始</button>
{#await promise}
	<p>計算中...</p>
{:then}
	{#if result != null}
		<ul>
			{#each result as res}
				<li>
					{#if res.histories}
						<CombiPal pal={res.histories[0][0]}></CombiPal> × <CombiPal pal={res.histories[0][1]}
						></CombiPal> = {res.name}
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	{#if result == null}
		<p>見つかりませんでした</p>
	{/if}
{/await}

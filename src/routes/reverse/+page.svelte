<script lang="ts">
	import type { Pal, ReverseCombination, PalMap } from '$lib/util/pal';
	import pals from '$lib/assets/pal.json';
	import reverseCombination from '$lib/assets/reverseCombination.json';
	import { getDisplayPalFullName } from '$lib/util/pal';

	let selected: Pal;
	const reverseCombinations = reverseCombination as ReverseCombination;
	const palMap = pals as PalMap;
	$: combos = selected
		? reverseCombinations[selected?.name].map(([parent1, parent2]) => [
				palMap[parent1],
				palMap[parent2],
				selected
			])
		: [];
</script>

<p>逆引き検索</p>
<p>{selected ? getDisplayPalFullName(selected) : ''}</p>
<select bind:value={selected}>
	{#each Object.values(pals) as pal}
		<option value={pal}>{getDisplayPalFullName(pal)}</option>
	{/each}
</select>
{#if selected}
	<ul>
		{#each combos as combo}
			<li>{combo[0].name} × {combo[1].name} = {combo[2].name}</li>
		{/each}
	</ul>
{/if}

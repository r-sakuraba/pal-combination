<script lang="ts">
	import type { Pal, Combination, PalMap } from '$lib/util/pal';
	import pals from '$lib/assets/pal.json';
	import combination from '$lib/assets/combination.json';
	import { getDisplayPalFullName } from '$lib/util/pal';

	let title = 'パル配合シミュレーション';
	let selected: Pal;
	const combinations = combination as Combination;
	const palMap = pals as PalMap;
	$: combos = selected
		? Object.entries(combinations[selected?.name]).map(([parent2, result]) => [
				selected,
				palMap[parent2],
				palMap[result]
			])
		: [];
</script>

<h1>{title}</h1>
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

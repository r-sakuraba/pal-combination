<script lang="ts">
	import type { PalType, ParentToChildMap, PalMap } from '$lib/util/pal';
	import _pals from '$lib/assets/pal.json';
	import _combination from '$lib/assets/combination.json';
	import { getDisplayPalFullName } from '$lib/util/pal';

	const parentToChildMap = _combination as ParentToChildMap;
	const palMap = _pals as PalMap;

	let selected: PalType;
	$: combos = selected
		? Object.entries(parentToChildMap[selected?.name]).map(([parent2, result]) => [
				selected,
				palMap[parent2],
				palMap[result]
			])
		: [];
</script>

<p>順引き検索</p>
<p>{selected ? getDisplayPalFullName(selected) : ''}</p>
<select bind:value={selected}>
	{#each Object.values(_pals) as pal}
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

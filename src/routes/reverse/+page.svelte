<script lang="ts">
	import _pals from '$lib/assets/pal.json';
	import _reverseCombination from '$lib/assets/reverseCombination.json';
	import type { ChildToParentsMap, PalMap, PalType } from '$lib/util/pal';
	import { getDisplayPalFullName } from '$lib/util/pal';

	const childToParentsMap = _reverseCombination as unknown as ChildToParentsMap;
	const palMap = _pals as PalMap;

	let selected: PalType;
	$: combos = selected
		? childToParentsMap[selected?.name].map(([parent1, parent2]) => [
				palMap[parent1],
				palMap[parent2],
				selected
			])
		: [];
</script>

<p>逆引き検索</p>
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

<script lang="ts">
	import CombiPal from './CombiPal.svelte';
	import { isUserPal, type CombiPalType, getImgPath } from '$lib/util/pal';
	import batu from '$lib/assets/batu.png';
	import { groupBy } from '$lib/util/common';

	export let pal: CombiPalType;

	$: histories = pal.histories ? groupBy(pal.histories, (history) => history[0].name) : undefined;
</script>

{#if histories}
	<span> (</span>
	{#each histories as history, i}
		<CombiPal pal={history[1][0][0]} /> <img width="30px" src={batu} alt="" />
		{#each history[1] as historyChild, i}
			{#if i !== 0}<span> ,</span>
			{/if}<CombiPal pal={historyChild[1]} />
		{/each}
	{/each}
	<span> ) =</span>
{/if}

{#if true}
	<img
		style="border: {isUserPal(pal) ? 'red 2px solid' : 'black 1px dashed'}"
		width="50px"
		src={getImgPath(pal)}
		alt=""
	/>
{/if}

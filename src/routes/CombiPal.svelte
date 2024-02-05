<script lang="ts">
	import CombiPal from './CombiPal.svelte';
	import type { CombiPalType } from '$lib/util/pal';

	export let pal: CombiPalType;
</script>

{pal.alias || pal.name}
{#if pal?.histories}
	(
	{#each pal?.histories as history, i}
		{#if i !== 0},
		{/if}<CombiPal pal={history[0]} /> × <CombiPal pal={history[1]} />
	{/each}
	)
{/if}

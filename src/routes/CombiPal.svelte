<script lang="ts">
	import CombiPal from './CombiPal.svelte';
	import { isUserPal, type CombiPalType, getImgPath } from '$lib/util/pal';
	import batu from '$lib/assets/batu.png';
	import { groupBy } from '$lib/util/common';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	export let pal: CombiPalType;

	$: histories = pal.histories ? groupBy(pal.histories, (history) => history[0].name) : undefined;
</script>

{#if histories}
	<span> (</span>
	{#each histories as history, i}
		<CombiPal pal={history[1][0][0]} /> <img width="30px" src={batu} alt="" />
		{#each history[1] as historyChild, i}
			{#if i !== 0}<span>・</span>
			{/if}<CombiPal pal={historyChild[1]} />
		{/each}
	{/each}
	<span> ) =</span>
{/if}

{#if true}
	<Wrapper>
		<img
			style="border: {isUserPal(pal) ? 'red 2px solid' : 'black 1px dashed'}"
			width="50px"
			src={getImgPath(pal)}
			alt=""
			title="iusiui"
		/>
		<!-- <Tooltip yPos="above">
			name: {pal.alias || pal.name},<br />
			{#if isUserPal(pal)}
				gender: {pal.gender === 1 ? '♂' : '♀'}<br />
				skills: {pal?.skills?.map((skill) => skill.name)}
			{/if}
		</Tooltip> -->
		{#if isUserPal(pal)}
			<Tooltip yPos="above">
				name: {pal.alias || pal.name}<br />
				gender: {pal.gender === 1 ? '♂' : '♀'}<br />
				skills: {pal?.skills?.map((skill) => skill.name)}
			</Tooltip>
		{:else}
			<Tooltip yPos="above">
				name: {pal.alias || pal.name}<br />
			</Tooltip>
		{/if}
	</Wrapper>
{/if}

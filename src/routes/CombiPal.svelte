<script lang="ts">
	import CombiPal from './CombiPal.svelte';
	import { isUserPal, type CombiPalType, getImgPath } from '$lib/util/pal';
	import { groupBy } from '$lib/util/common';
	import { Icon, Popover } from '@sveltestrap/sveltestrap';
	import { v4 as uuidv4 } from 'uuid';

	export let pal: CombiPalType;

	$: histories = pal.histories ? groupBy(pal.histories, (history) => history[0].name) : undefined;
	const id = uuidv4().replaceAll(/[0-9]/g, '');
</script>

{#if histories}
	<span> <Icon name="chevron-compact-left"></Icon></span>
	{#each histories as history, i}
		<CombiPal pal={history[1][0][0]} />
		<Icon name="plus-lg"></Icon>
		<!-- <img width="30px" src={batu} alt="" /> -->
		{#each history[1] as historyChild, i}
			{#if i !== 0}<Icon name="dot"></Icon>
			{/if}<CombiPal pal={historyChild[1]} />
		{/each}
	{/each}
	<span> <Icon name="chevron-compact-right"></Icon> <Icon name="forward-fill"></Icon></span>
{/if}

<Popover target={id} placement="top" title="パル情報" trigger="hover">
	パル名: {pal.alias || pal.name}<br />
	{#if isUserPal(pal)}
		性別:
		{#if pal.gender === 1}
			<Icon name="gender-male" class="male"></Icon>
		{:else}
			<Icon name="gender-female" class="female"></Icon>
		{/if}<br />
		スキル: {pal?.skills?.map((skill) => skill.name)}
	{/if}
</Popover>

{#if true}
	<img
		style="border: {isUserPal(pal) ? 'red 2px solid' : 'black 1px dashed'}"
		width="50px"
		src={getImgPath(pal)}
		alt=""
		title="iusiui"
		{id}
	/>
	<!-- <Tooltip yPos="above">
			name: {pal.alias || pal.name},<br />
			{#if isUserPal(pal)}
				gender: {pal.gender === 1 ? '♂' : '♀'}<br />
				skills: {pal?.skills?.map((skill) => skill.name)}
			{/if}
		</Tooltip> -->
	<!-- {#if isUserPal(pal)}
			<Tooltip yPos="above">
				name: {pal.alias || pal.name}<br />
				gender: {pal.gender === 1 ? '♂' : '♀'}<br />
				skills: {pal?.skills?.map((skill) => skill.name)}
			</Tooltip>
		{:else}
			<Tooltip yPos="above">
				name: {pal.alias || pal.name}<br />
			</Tooltip>
		{/if} -->
{/if}

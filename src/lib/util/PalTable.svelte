<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Checkbox from '@smui/checkbox';
	import DataTable, { Body, Cell, Head, Label, Row, SortValue } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import type { UserPalType } from '$lib/util/pal';
	import { dummySkil } from '$lib/util/skil';
	import { Icon } from '@smui/common';

	const dispatch = createEventDispatcher<{ deletePal: UserPalType[] }>();

	export let pals: UserPalType[];
	export let sortable: boolean;

	let sort: keyof UserPalType = 'createdAt';
	let sortDirection: Lowercase<keyof typeof SortValue> = SortValue.DESCENDING;
	let tableSelectedPal: UserPalType[] = [];

	function deletePal(pal: UserPalType) {
		dispatch('deletePal', [pal]);
	}

	function deletePals() {
		dispatch('deletePal', tableSelectedPal);
	}
	$: tablePals = pals.toSorted((a, b) => {
		let [aVal, bVal] = [a[sort], b[sort]][sortDirection === 'ascending' ? 'slice' : 'reverse']();
		aVal = aVal ?? '';
		bVal = bVal ?? '';
		if (typeof aVal === 'string' && typeof bVal === 'string') {
			return aVal.localeCompare(bVal);
		}
		return Number(aVal) - Number(bVal);
	});

	function handleSort() {
		// pals.sort((a, b) => {
		// 	let [aVal, bVal] = [a[sort], b[sort]][sortDirection === 'ascending' ? 'slice' : 'reverse']();
		// 	aVal = aVal ?? '';
		// 	bVal = bVal ?? '';
		// 	if (typeof aVal === 'string' && typeof bVal === 'string') {
		// 		return aVal.localeCompare(bVal);
		// 	}
		// 	return Number(aVal) - Number(bVal);
		// });
		// pals = pals;
	}
</script>

<DataTable
	bind:sortable
	bind:sort
	bind:sortDirection
	style="max-width: 100%;"
	on:SMUIDataTable:sorted={handleSort}
>
	<Head>
		<Row>
			<!-- <Cell checkbox>
				<Checkbox />
			</Cell> -->
			<Cell columnId="name">
				<Label>Name</Label>
				{#if sortable}
					<IconButton class="material-icons">arrow_upward</IconButton>
				{/if}
			</Cell>
			<Cell columnId="alias">
				<Label>Nickname</Label>
				{#if sortable}
					<IconButton class="material-icons">arrow_upward</IconButton>
				{/if}
			</Cell>
			<Cell columnId="gender">
				<Label>♂/♀</Label>
				{#if sortable}
					<IconButton class="material-icons">arrow_upward</IconButton>
				{/if}
			</Cell>
			<Cell sortable={false}>
				<Label>Skills</Label>
			</Cell>
			<Cell sortable={false}></Cell>
		</Row>
	</Head>
	<Body>
		{#each tablePals as pal, i}
			<Row>
				<!-- <Cell checkbox>
					<Checkbox bind:group={tableSelectedPal} value={pal} valueKey={pal.name} />
				</Cell> -->
				<Cell>{pal.name}</Cell>
				<Cell>{pal.alias ?? ''}</Cell>
				<Cell>{pal.gender === 1 ? '♂' : '♀'}</Cell>
				<Cell>
					{#each pal.skills.filter((skil) => skil.name !== dummySkil.name) as skil, j}
						{#if j !== 0}<br />{/if}{skil.name}
					{/each}
				</Cell>
				<Cell>
					<!-- <button on:click={() => deletePal(pal)}> -->
					<IconButton style="color: gray" class="material-icons" on:click={() => deletePal(pal)}
						>delete</IconButton
					>
					<!-- <Icon on:click={() => deletePal(pal)} class="material-icons">cancel</Icon> -->
					<!-- </button> -->
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { UserPalType } from '$lib/util/pal';
	import { dummySkil } from '$lib/util/skill';
	import { Button, Icon, Table } from '@sveltestrap/sveltestrap';

	const dispatch = createEventDispatcher<{ deletePal: UserPalType[] }>();

	export let pals: UserPalType[];

	let sort: keyof UserPalType = 'createdAt';
	let tableSelectedPal: UserPalType[] = [];

	function deletePal(pal: UserPalType) {
		dispatch('deletePal', [pal]);
	}

	function deletePals() {
		dispatch('deletePal', tableSelectedPal);
	}
	$: tablePals = [...pals].reverse();

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

<div class="table-responsive">
	<table class="table table-sm align-middle table-striped table-hover text-nowrap">
		<thead>
			<tr>
				<th style="width: 5%;">No</th>
				<th>パル名</th>
				<th>ニックネーム</th>
				<th style="text-align:center">
					<Icon name="gender-male" class="male"></Icon>/
					<Icon name="gender-female" class="female"></Icon>
				</th>
				<th>スキル</th>
				<th style="width: 5%;"></th>
			</tr>
		</thead>
		<tbody class="table-group-divider">
			{#each tablePals as pal, i}
				<tr>
					<th scope="row">{i + 1}</th>
					<!-- <Cell checkbox>
					<Checkbox bind:group={tableSelectedPal} value={pal} valueKey={pal.name} />
				</Cell> -->
					<td>{pal.name}</td>
					<td class="text-wrap">{pal.alias ?? ''}</td>
					<td style="text-align:center">
						{#if pal.gender === 1}
							<Icon name="gender-male" class="male"></Icon>
						{:else}
							<Icon name="gender-female" class="female"></Icon>
						{/if}
					</td>
					<td>
						{#each pal.skills.filter((skil) => skil.name !== dummySkil.name) as skil, j}
							{#if j !== 0}<br />{/if}{skil.name}
						{/each}
					</td>
					<td>
						<button type="button" class="btn" on:click={() => deletePal(pal)}
							><Icon name="trash"></Icon></button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
</style>

<script lang="ts">
	import _pals from '$lib/assets/pal.json';
	import * as storage from '$lib/util/localstorage';
	import type { PalMap, PalType, UserPalType } from '$lib/util/pal';
	import { Container, Row } from '@sveltestrap/sveltestrap';
	import PalCard from '../PalCard.svelte';

	const palMap = _pals as PalMap;

	let notHavePals = new Set(storage.getNotHavePals().map((pal) => pal?.name));

	function clickImage(event: CustomEvent<PalType>) {
		const pal = event.detail;
		if (notHavePals.has(pal.name)) {
			notHavePals.delete(pal.name);
		} else {
			notHavePals.add(pal.name);
		}
		notHavePals = notHavePals;
		// console.log(notHavePals);
		storage.registerNotHavePals([...notHavePals].map((name) => palMap[name]));
	}
</script>

<Container>
	<Row>
		{#each Object.values(palMap) as pal, i}
			<div class="col-3 col-md-2 col-xl-1 col-div">
				<PalCard {pal} notHave={notHavePals.has(pal.name)} on:clickImage={clickImage}></PalCard>
			</div>
		{/each}
	</Row>
</Container>

<style>
	.col-div {
		padding-top: calc(var(--bs-gutter-x) * 0.2);
		padding-left: calc(var(--bs-gutter-x) * 0.2);
		padding-right: calc(var(--bs-gutter-x) * 0.2);
	}

	/* .card-img-overlay {
		padding: 0.2rem;
	}

	.not-have {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(var(--bs-body-color-rgb), 0.8);
	} */
</style>

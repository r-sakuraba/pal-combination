<script lang="ts">
	import { getImgPath, type PalType } from '$lib/util/pal';
	import { Card } from '@sveltestrap/sveltestrap';
	import { createEventDispatcher } from 'svelte';

	export let pal: PalType;
	export let notHave: boolean;

	const dispatch = createEventDispatcher<{ clickImage: PalType }>();

	function clickImage(pal: PalType) {
		dispatch('clickImage', pal);
	}
</script>

<div class="card-div">
	<Card class="text-bg-dark" on:click={() => clickImage(pal)}>
		<!-- <Image thumbnail src={getImgPath(pal)}></Image> -->
		<img src={getImgPath(pal)} class="card-img" alt="..." />
		<div class="card-img-overlay">
			{#if notHave}
				<div class="not-have">
					<h4 class="card-title">未所持</h4>
				</div>
			{/if}
			<p>{pal.name}</p>
		</div>
	</Card>
</div>

<style>
	p {
		background-color: rgba(var(--bs-primary-rgb), 0.5);
		text-align: center;
		/* 最小1.2rem | SP:1.4rem | TB:1.5rem | PC:1.6rem | 最大1.8rem */
		font-size: clamp(0.5rem, calc(0.25vw + 0.6rem), 1.1rem);
	}

	.card-div {
		cursor: pointer;
		max-width: 120px;
	}

	.card-img-overlay {
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
	}
</style>

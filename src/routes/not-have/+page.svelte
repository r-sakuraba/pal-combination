<script lang="ts">
	import _pals from '$lib/assets/pal.json';
	import * as storage from '$lib/util/localstorage';
	import type { PalMap, PalType, UserPalType } from '$lib/util/pal';
	import { getImgPath } from '$lib/util/pal';
	import ImageList, {
		Image,
		ImageAspectContainer,
		Label as ImageLabel,
		Item,
		Supporting
	} from '@smui/image-list';
	import '../../theme/_smui-theme.scss';
	import './+page.scss';

	const palMap = _pals as PalMap;

	let hasPals: UserPalType[] = storage.getPals();
	let notHavePals = new Set(storage.getNotHavePals().map((pal) => pal?.name));

	let selected: PalType = palMap['モコロン'];

	const updateNotHavePal = () => {
		storage.registerPal(hasPals);
	};

	const deletePal = (event: CustomEvent<UserPalType[]>) => {
		console.log(event);

		hasPals = hasPals.filter((pal) =>
			event.detail.every((deletePal) => deletePal.createdAt !== pal.createdAt)
		);
		storage.registerPal(hasPals);
	};

	function clickImage(pal: PalType) {
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

<div class="test">
	<ImageList class="my-image-list-standard" withTextProtection>
		{#each Object.values(palMap) as pal, i}
			<Item class="image-item" on:click={() => clickImage(pal)}>
				<ImageAspectContainer>
					<Image style="color: red" src={getImgPath(pal)} alt={pal.en} />
				</ImageAspectContainer>
				<Supporting style="height: {notHavePals.has(pal.name) ? '100%' : '30%'}">
					<ImageLabel style="font-size: 13px">
						{#if notHavePals.has(pal.name)}
							<span style="font-size: 25px">未所持</span><br />
						{/if}
						{pal.name}
					</ImageLabel>
				</Supporting>
			</Item>
		{/each}
	</ImageList>
</div>

<style>
	.test {
		/* background-color: aqua; */
		max-width: 70%;
		width: 800px;
		/* display: flex;
		text-align: center; */
		margin: 0 auto;
	}
</style>

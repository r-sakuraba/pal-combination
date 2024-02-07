<script lang="ts">
	import CircularProgress from '@smui/circular-progress';

	import batu from '$lib/assets/batu.png';
	import _findCombinations from '$lib/assets/findCombination.json';
	import _pals from '$lib/assets/pal.json';
	import _skilList from '$lib/assets/skil.json';
	import * as storage from '$lib/util/localstorage';
	import type { CombiPalType, PalMap, PalType, ParentChildToOtherParentsMap } from '$lib/util/pal';
	import { getImgPath } from '$lib/util/pal';
	import type { Skill } from '$lib/util/skil';
	import Autocomplete from '@smui-extra/autocomplete';
	import Button from '@smui/button';
	import Chip, { Set as ChipsSet, Text, TrailingAction } from '@smui/chips';
	import ImageList, {
		Image,
		ImageAspectContainer,
		Label as ImageLabel,
		Item,
		Supporting
	} from '@smui/image-list';
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import Menu from '@smui/menu';
	import '../../theme/_smui-theme.scss';
	import CombiPal from '../CombiPal.svelte';
	import './+page.scss';

	const otherParentsMap = _findCombinations as ParentChildToOtherParentsMap;
	const palMap = _pals as PalMap;

	const hasPals = storage.getPals();

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	let promise: Promise<void>;

	let targetPal: PalType = palMap['モコロン'];
	let result: CombiPalType[] | undefined = [];

	async function searchPal() {
		await sleep(0);
		result = [];
		const nextQueue: CombiPalType[] = [];
		nextQueue.push(
			...hasPals.filter((pal) => pal.skills.some((skil) => skil.name === targetSkil.name))
		);
		let searchedPal: Set<string> = new Set([]);
		let count = 1;

		while (nextQueue.length && result.length === 0 && count < 7) {
			const queue: CombiPalType[] = [...nextQueue];

			searchedPal = new Set([...searchedPal, ...queue.map((pal) => pal.name)]);

			const skipCount: { [name: string]: number } = {};
			while (queue.length && result.length < 31) {
				const target: CombiPalType = queue.shift() as CombiPalType;
				if (skipCount[target.name] > 30) {
					continue;
				} else {
					skipCount[target.name] = (skipCount[target.name] ?? 0) + 1;
				}
				// console.log(target, willFindPal);
				if (otherParentsMap[target.name]?.[targetPal.name]) {
					result.push({
						...palMap[targetPal.name],
						histories: otherParentsMap[target.name]?.[targetPal.name].map((comb) => [
							target,
							palMap[comb]
						])
					});
				}

				nextQueue.push(
					...Object.entries(otherParentsMap[target.name] ?? [])
						.filter(([child, parents]) => !searchedPal.has(child))
						.map<CombiPalType>(([child, parents]) => ({
							...palMap[child],
							histories: parents.map((parent) => [target, palMap[parent]])
						}))
				);
			}
			count++;
		}
		result = result.length > 0 ? result : undefined;
	}

	function executeSearch() {
		promise = searchPal();
	}

	// ===========================
	const skillList = _skilList as Skill[];

	// let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
	let selectedSkill: Skill[] = [];
	$: targetSkil = selectedSkill[0];

	$: available = skillList?.filter((skill) =>
		selectedSkill.every((selectedSkill) => selectedSkill.name !== skill.name)
	);
	$: disabledAddSkill = selectedSkill.length >= 1;
	// .map((skill) => skill.name);

	let value = '';

	function handleSelection(event: CustomEvent<Skill>) {
		// Don't actually select the item.
		event.preventDefault();

		if (disabledAddSkill) {
			return;
		}

		// You could also set value back to '' here.
		selectedSkill.push(event.detail);
		// Make sure the chips get updated.
		selectedSkill = selectedSkill;
	}

	let menu: Menu;

	function clickMenuImage(pal: PalType) {
		targetPal = pal;
		menu.setOpen(false);
	}
</script>

<div class="layout-div">
	<LayoutGrid>
		<Cell span={6}>
			<div class="demo-cell-img">
				<!-- <div style="min-width: 100px;"> -->
				<Button style="height: auto;" on:click={() => menu.setOpen(true)}>
					<!-- <BuutonLabel>Open Menu</BuutonLabel> -->
					<Image src={getImgPath(targetPal) || batu} />
				</Button>
			</div>
		</Cell>
		<Cell span={6}>
			<InnerGrid>
				<Cell span={12}>
					<div class="demo-cell">
						<Autocomplete
							style="width: 100%"
							options={available}
							getOptionLabel={(option) => option?.name ?? ''}
							bind:value
							disabled={disabledAddSkill}
							menu$class={disabledAddSkill ? 'hidden-skill-menu' : undefined}
							label="パッシブスキル"
							on:SMUIAutocomplete:selected={handleSelection}
						/>
					</div>
					<span style="font-size: 10px;color: red">現在は一つのみ選択可能です</span>
				</Cell>
				<Cell span={12}>
					<div class="demo-cell">
						<div class="status">
							<ChipsSet style="display: inline-block;" bind:chips={selectedSkill} let:chip>
								<Chip {chip} style="max-width: 90px">
									<Text class="text-overflow" tabindex={0}>{chip.name}</Text>
									<TrailingAction icon$class="material-icons">cancel</TrailingAction>
								</Chip>
							</ChipsSet>
						</div>
					</div>
				</Cell>
			</InnerGrid>
		</Cell>
		<Cell span={12}>
			<Menu bind:this={menu}>
				<ImageList class="my-image-list-standard" withTextProtection>
					{#each Object.values(palMap) as pal, i}
						<Item class="image-item" on:click={() => clickMenuImage(pal)}>
							<ImageAspectContainer>
								<Image src={getImgPath(pal)} alt={pal.en} />
							</ImageAspectContainer>
							<Supporting style="height: 30%">
								<ImageLabel style="font-size: 13px">{pal.name}</ImageLabel>
							</Supporting>
						</Item>
					{/each}
				</ImageList>
			</Menu>
			<div class="demo-cell" style="justify-content: center">
				<Button style="width: 50%" variant="raised" on:click={executeSearch}>探索</Button>
			</div>
		</Cell>
	</LayoutGrid>
</div>
{#await promise}
	<div style="display: flex; justify-content: center">
		<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	</div>
{:then}
	{#if result != null}
		<ul>
			{#each result as res}
				<li>
					<CombiPal pal={res} first={true}></CombiPal>
				</li>
			{/each}
		</ul>
	{/if}

	{#if result == null}
		<p>見つかりませんでした</p>
	{/if}
{/await}

<style>
	ul {
		list-style: none;
	}

	ul > li {
		border: 1px solid black;
		display: flex;
		align-items: center;
	}

	* :global(.hidden-skill-menu) {
		display: none;
	}

	.demo-cell {
		height: 50px;
		display: flex;
		justify-content: start;
		align-items: center;
		/* background-color: var(--mdc-theme-secondary, #333); */
		color: var(--mdc-theme-on-secondary, #fff);
	}

	.demo-cell-img {
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: var(--mdc-theme-secondary, #333); */
		color: var(--mdc-theme-on-secondary, #fff);
	}

	.layout-div {
		/* background-color: aqua; */
		max-width: 70%;
		width: 800px;
		margin: 0 auto;
	}

	* :global(span:has(.text-overflow)) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>

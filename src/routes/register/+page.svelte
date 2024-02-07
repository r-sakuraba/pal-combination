<script lang="ts">
	import '../../theme/_smui-theme.scss';
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import _pals from '$lib/assets/pal.json';
	import _skilList from '$lib/assets/skil.json';
	import PalTable from '$lib/util/PalTable.svelte';
	import * as storage from '$lib/util/localstorage';
	import type { PalMap, PalType, UserPalType } from '$lib/util/pal';
	import { getDisplayPalFullName, getImgPath } from '$lib/util/pal';
	import { type Skill } from '$lib/util/skil';
	import Autocomplete from '@smui-extra/autocomplete';
	import Button from '@smui/button';
	import Chip, { Set, Text, TrailingAction } from '@smui/chips';
	import batu from '$lib/assets/batu.png';
	import { Icon } from '@smui/common';
	import ImageList, {
		Image,
		ImageAspectContainer,
		Label as ImageLabel,
		Item,
		Supporting
	} from '@smui/image-list';
	import Menu from '@smui/menu';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import Textfield from '@smui/textfield';
	import './+page.scss';

	const palMap = _pals as PalMap;
	const skillList = _skilList as Skill[];

	let hasPals: UserPalType[] = storage.getPals();

	let selected: PalType = palMap['モコロン'];
	let genderText = 'male';
	$: gender = genderText === 'male' ? 1 : 2;
	let alias: string = '';
	$: editPal = {
		...selected,
		gender,
		skills: [...selectedSkill],
		alias
	} as PartiallyPartial<UserPalType, 'createdAt'>;

	const registerPal = () => {
		const registerTarget: UserPalType = {
			...editPal,
			createdAt: Date.now()
		};
		hasPals = [...hasPals, registerTarget];
		storage.registerPal(hasPals);
	};

	const deletePal = (event: CustomEvent<UserPalType[]>) => {
		console.log(event);

		hasPals = hasPals.filter((pal) =>
			event.detail.every((deletePal) => deletePal.createdAt !== pal.createdAt)
		);
		storage.registerPal(hasPals);
	};

	// let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
	let selectedSkill: Skill[] = [];

	$: available = skillList?.filter((skill) =>
		selectedSkill.every((selectedSkill) => selectedSkill.name !== skill.name)
	);
	$: disabledAddSkill = selectedSkill.length >= 4;
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
		selected = pal;
		menu.setOpen(false);
	}
</script>

<div class="test">
	<LayoutGrid>
		<Cell span={3}>
			<div class="demo-cell-img">
				<!-- <div style="min-width: 100px;"> -->
				<Button style="height: auto;" on:click={() => menu.setOpen(true)}>
					<!-- <BuutonLabel>Open Menu</BuutonLabel> -->
					<Image src={getImgPath(selected) || batu} />
				</Button>
			</div>
		</Cell>
		<Cell span={9}>
			<InnerGrid>
				<Cell span={8}>
					<div class="demo-cell">
						<Textfield style="width: 100%" bind:value={alias} label="ニックネーム"></Textfield>
					</div>
				</Cell>
				<Cell span={4}>
					<div class="demo-cell">
						<SegmentedButton
							segments={['male', 'female']}
							let:segment
							singleSelect
							bind:selected={genderText}
						>
							<!-- Note: the `segment` property is required! -->
							<Segment {segment}>
								<Icon class="material-icons">{segment}</Icon>
							</Segment>
						</SegmentedButton>
					</div>
				</Cell>
				<Cell span={4}>
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
				</Cell>
				<Cell span={8}>
					<div class="demo-cell">
						<div class="status">
							<Set style="display: inline-block;" bind:chips={selectedSkill} let:chip>
								<Chip {chip} style="max-width: 90px">
									<Text class="text-overflow" tabindex={0}>{chip.name}</Text>
									<TrailingAction icon$class="material-icons">cancel</TrailingAction>
								</Chip>
							</Set>
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
				<Button style="width: 50%" variant="raised" on:click={registerPal}>登録</Button>
			</div>
		</Cell>
	</LayoutGrid>
</div>

<div style="text-align: center">
	<PalTable pals={hasPals} sortable={false} on:deletePal={deletePal}></PalTable>
</div>

<style>
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

	.test {
		/* background-color: aqua; */
		max-width: 70%;
		width: 800px;
		/* display: flex;
		text-align: center; */
		margin: 0 auto;
	}

	* :global(span:has(.text-overflow)) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>

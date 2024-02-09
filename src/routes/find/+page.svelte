<script lang="ts">
	import _findCombinations from '$lib/assets/findCombination.json';
	import _pals from '$lib/assets/pal.json';
	import _skilList from '$lib/assets/skil.json';
	import * as storage from '$lib/util/localstorage';
	import type { CombiPalType, PalMap, PalType, ParentChildToOtherParentsMap } from '$lib/util/pal';
	import type { Skill } from '$lib/util/skill';
	import {
		Button,
		ButtonGroup,
		ButtonToolbar,
		Col,
		Container,
		Icon,
		ListGroup,
		ListGroupItem,
		Modal,
		ModalBody,
		ModalHeader,
		Spinner
	} from '@sveltestrap/sveltestrap';
	import CombiPal from '../CombiPal.svelte';
	import PalCard from '../PalCard.svelte';

	const otherParentsMap = _findCombinations as ParentChildToOtherParentsMap;
	const palMap = _pals as PalMap;

	const hasPals = storage.getPals();
	const notHavePals = storage.getNotHavePals().map((p) => p.name);

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	let promise: Promise<void>;

	let targetPal: PalType = palMap['モコロン'];
	let result: CombiPalType[] | undefined = [];

	async function searchPal() {
		await sleep(0);
		result = [];
		const nextQueue: CombiPalType[] = [];
		nextQueue.push(
			...hasPals.filter(
				(pal) => !targetSkil?.name || pal.skills.some((skil) => skil.name === targetSkil?.name)
			)
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
					const difference = [otherParentsMap[target.name][targetPal.name], notHavePals].reduce(
						(a, b) => a.filter((c) => !b.includes(c))
					);
					if (difference.length > 0) {
						result.push({
							...palMap[targetPal.name],
							histories: difference.map((comb) => [target, palMap[comb]])
						});
					}
				}

				nextQueue.push(
					...Object.entries(otherParentsMap[target.name] ?? [])
						.filter(([child, parents]) => !searchedPal.has(child))
						.map<[string, string[], string[]]>(([child, parents]) => {
							const difference = [parents, notHavePals].reduce((a, b) =>
								a.filter((c) => !b.includes(c))
							);
							return [child, parents, difference];
						})
						.filter(([child, parents, difference]) => difference.length > 0)
						.map<CombiPalType>(([child, parents, difference]) => ({
							...palMap[child],
							histories: difference.map((diff) => [target, palMap[diff]])
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

	let selectedSkill: Skill[] = [];
	$: targetSkil = selectedSkill[0];

	$: available = skillList?.filter((skill) =>
		selectedSkill.every((selectedSkill) => selectedSkill.name !== skill.name)
	);
	$: disabledAddSkill = selectedSkill.length >= 1;

	let openModal = false;
	let skillName = '';

	function toggle() {
		openModal = !openModal;
	}

	function clickModalImage(event: CustomEvent<PalType>) {
		targetPal = event.detail;
		openModal = false;
	}

	function clickSkill() {
		if (disabledAddSkill) {
			return;
		}
		const skill = skillList.find((skill) => skill.name === skillName);
		if (skill == null) {
			return;
		}

		// You could also set value back to '' here.
		selectedSkill.push(skill);
		// Make sure the chips get updated.
		selectedSkill = selectedSkill;

		skillName = '';
		// openDropdown = false;
	}

	function removeSkill(index: number) {
		selectedSkill = selectedSkill.filter((_, i) => i !== index);
	}
</script>

<Container>
	<div class="row g-2">
		<Col xs="6">
			<div class="d-flex justify-content-center">
				<PalCard pal={targetPal} notHave={false} on:clickImage={toggle}></PalCard>
			</div>
		</Col>
		<Col>
			<div class="row g-2">
				<Col>
					<label for="skillDataList" class="form-label">パッシブスキル選択</label>
					<input
						class="form-control"
						list="datalistOptions"
						id="skillDataList"
						placeholder="Type to search..."
						bind:value={skillName}
						on:change={() => clickSkill()}
					/>
					<datalist id="datalistOptions">
						{#each available as skill, i}
							<option value={skill.name}> </option>
						{/each}
					</datalist>
				</Col>
			</div>
			<div class="row g-2">
				<Col>
					<div class="d-flex justify-content-center">
						<ButtonToolbar>
							{#each selectedSkill as skill, i}
								<ButtonGroup class="me-2">
									<Button outline size="sm" color="primary">
										<span class="d-inline-block text-truncate" style="max-width: 60px">
											{skill.name}
										</span>
									</Button>
									<Button outline size="sm" color="secondary" on:click={() => removeSkill(i)}
										><Icon name="x"></Icon></Button
									>
								</ButtonGroup>
							{/each}
						</ButtonToolbar>
					</div>
				</Col>
			</div>
		</Col>
	</div>
	<div class="row g-2">
		<Col>
			<Button color="primary" block on:click={executeSearch}>探索</Button>
		</Col>
	</div>

	<Modal isOpen={openModal} {toggle} scrollable>
		<ModalHeader {toggle}>パルの選択</ModalHeader>
		<ModalBody>
			<div class="row g-2">
				{#each Object.values(palMap) as pal, i}
					<div class="col-3 col-div">
						<PalCard {pal} notHave={false} on:clickImage={clickModalImage}></PalCard>
					</div>
				{/each}
			</div>
		</ModalBody>
	</Modal>
</Container>
<Container>
	{#await promise}
		<div class="row g-2">
			<Col>
				<Spinner type="border" size="" color="primary" />
			</Col>
		</div>
	{:then}
		<div class="row g-2">
			{#if result != null}
				<ListGroup>
					{#each result as res}
						<ListGroupItem tag="li"><CombiPal pal={res}></CombiPal></ListGroupItem>
					{/each}
				</ListGroup>
			{:else}
				<div class="col" style="text-align: center;">
					<h2>見つかりませんでした</h2>
				</div>
			{/if}
		</div>
	{/await}
</Container>

<style>
	.row {
		margin-top: 0;
	}
	.col-div {
		padding-top: calc(var(--bs-gutter-x) * 0.2);
		padding-left: calc(var(--bs-gutter-x) * 0.2);
		padding-right: calc(var(--bs-gutter-x) * 0.2);
	}
</style>

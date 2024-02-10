<script lang="ts">
	import _pals from '$lib/assets/pal.json';
	import _skilList from '$lib/assets/skil.json';
	import PalTable from '$lib/util/PalTable.svelte';
	import * as storage from '$lib/util/localstorage';
	import type { PalMap, PalType, UserPalType } from '$lib/util/pal';
	import { type Skill } from '$lib/util/skill';
	import {
		Button,
		ButtonGroup,
		ButtonToolbar,
		Col,
		Container,
		Form,
		FormGroup,
		Icon,
		Input,
		Modal,
		ModalBody,
		ModalHeader,
		Row
	} from '@sveltestrap/sveltestrap';
	import PalCard from '../PalCard.svelte';

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

	let selectedSkill: Skill[] = [];
	$: disabledAddSkill = selectedSkill.length >= 4;

	let openModal = false;

	// let openDropdown = false;
	// $: showDropdown = openDropdown && filteredSkill.length > 0;
	// let skillFilter = '';
	// $: filteredSkill = skillList.filter((skill) => {
	// 	const name = skill.name;
	// 	const filterResult = !skillFilter || name.includes(skillFilter);
	// 	const selectedResult = selectedSkill.some((selected) => selected.name === name);
	// 	return filterResult && !selectedResult;
	// });
	$: available = skillList?.filter((skill) =>
		selectedSkill.every((selectedSkill) => selectedSkill.name !== skill.name)
	);
	let skillName = '';

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

	function toggle() {
		openModal = !openModal;
	}

	function clickModalImage(event: CustomEvent<PalType>) {
		selected = event.detail;
		openModal = false;
	}

	function clickSkill(event: MouseEvent, skill: Skill) {
		event.stopPropagation();
		if (disabledAddSkill) {
			return;
		}

		// You could also set value back to '' here.
		selectedSkill.push(skill);
		// Make sure the chips get updated.
		selectedSkill = selectedSkill;
		// openDropdown = false;
	}

	function clickSkill2() {
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
		<Col>
			<div class="d-flex justify-content-center">
				<PalCard pal={selected} notHave={false} on:clickImage={toggle}></PalCard>
			</div>
		</Col>
	</div>
	<div class="row g-2">
		<Col xs="8">
			<Form>
				<label for="nickname" class="form-label">ニックネーム</label>
				<FormGroup>
					<input id="nickname" class="form-control bg-w" bind:value={alias} />
				</FormGroup>
			</Form>
		</Col>
		<div class="col-4 align-self-center" style="text-align: center;">
			<input
				type="radio"
				class="btn-check"
				name="gender"
				value="male"
				id="option1"
				bind:group={genderText}
			/>
			<label class="btn gender-btn" class:btn-outline-primary={genderText === 'male'} for="option1">
				<Icon name="gender-male"></Icon>
			</label>
			<input
				type="radio"
				class="btn-check"
				name="gender"
				value="female"
				id="option2"
				bind:group={genderText}
			/>
			<label
				class="btn gender-btn"
				class:btn-outline-primary={genderText === 'female'}
				for="option2"
			>
				<Icon name="gender-female"></Icon>
			</label>
		</div>
	</div>
	<div class="row g-2">
		<Col sm="12" md="4">
			<label for="skillDataList" class="form-label">パッシブスキル選択</label>
			<input
				class="form-control bg-w"
				list="datalistOptions"
				id="skillDataList"
				placeholder="Type to search..."
				disabled={disabledAddSkill}
				bind:value={skillName}
				on:change={() => clickSkill2()}
			/>
			<datalist id="datalistOptions">
				{#each available as skill}
					<option value={skill.name}> </option>
				{/each}
			</datalist>
			<!-- <div class="d-flex justify-content-center">
				<Dropdown isOpen={showDropdown} toggle={() => (openDropdown = !openDropdown)}>
					<DropdownToggle tag="div" class="d-inline-block">
						<Form>
							<FormGroup floating label="スキル選択">
								<Input bind:value={skillFilter} on:input={() => (openDropdown = true)} />
							</FormGroup>
						</Form>
					</DropdownToggle>
					{#if filteredSkill.length !== 0}
						<ul class="dropdown-menu" class:d-block={showDropdown}>
							{#each filteredSkill as skill, i}
								{#if i !== 0}
									<DropdownItem divider />
								{/if}
								<DropdownItem on:click={(event) => clickSkill(event, skill)}>
									{skill.name}
								</DropdownItem>
							{/each}
						</ul>
					{/if}
				</Dropdown>
			</div> -->
		</Col>
		<Col sm="12" md="8" class="align-self-center">
			<div class="d-flex justify-content-center">
				<ButtonToolbar>
					{#each selectedSkill as skill, i}
						<ButtonGroup class="me-2">
							<Button
								outline
								size="sm"
								color="primary btn-outline-primary-no-hover"
								style="cursor: default;"
							>
								<span class="d-inline-block text-truncate" style="max-width: 90px">
									{skill.name}
								</span>
							</Button>
							<Button outline size="sm" color="primary" on:click={() => removeSkill(i)}>
								<Icon name="x"></Icon>
							</Button>
						</ButtonGroup>
					{/each}
				</ButtonToolbar>
			</div>
		</Col>
	</div>
	<div class="row g-2">
		<Col>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="btn d-block execute-btn" on:click={registerPal}>登録</div>
		</Col>
	</div>
	<div class="row g-2">
		<Col>
			<PalTable pals={hasPals} on:deletePal={deletePal}></PalTable>
		</Col>
	</div>
</Container>

<Modal isOpen={openModal} {toggle} scrollable>
	<ModalHeader {toggle}>パルの選択</ModalHeader>
	<ModalBody>
		<Row>
			{#each Object.values(palMap) as pal, i}
				<div class="col-3 col-div">
					<PalCard {pal} notHave={false} on:clickImage={clickModalImage}></PalCard>
				</div>
			{/each}
		</Row>
	</ModalBody>
</Modal>

<style>
	.row {
		margin-top: 0;
	}
	.col-div {
		padding-top: calc(var(--bs-gutter-x) * 0.2);
		padding-left: calc(var(--bs-gutter-x) * 0.2);
		padding-right: calc(var(--bs-gutter-x) * 0.2);
	}

	.gender-btn {
		background-color: transparent;
		border-color: transparent;
		color: #48aca0;
		&:hover {
			background-color: #48aca0;
			border-color: #48aca0;
			color: #fff;
		}
	}

	.execute-btn {
		background-color: #6ac1b7;
		border-color: #6ac1b7;
		color: #fff;
		&:hover {
			background-color: #48aca0;
			border-color: #48aca0;
			color: #fff;
		}
	}
	.btn-check:checked + .btn {
		background-color: #48aca0;
		border-color: #48aca0;
		color: #fff;
	}

	.bg-w {
		background-color: #fff;
	}

	:global(.bg-w) {
		background-color: #fff;
	}
</style>

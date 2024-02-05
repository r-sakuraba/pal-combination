<script lang="ts">
	import _pals from '$lib/assets/pal.json';
	import _skilList from '$lib/assets/skil.json';
	import * as storage from '$lib/util/localstorage';
	import type { PalType, PalMap, UserPalType } from '$lib/util/pal';
	import { getDisplayPalFullName } from '$lib/util/pal';
	import { dummySkil, type Skil } from '$lib/util/skil';

	const palMap = _pals as PalMap;

	let hasPals: UserPalType[] = storage.getPals();

	let selected: PalType;
	let gender: number = 1;
	let skils: Skil[] = [dummySkil, dummySkil, dummySkil, dummySkil];
	let alias: string;
	$: editPal = {
		...selected,
		gender,
		skils,
		alias
	} as UserPalType;

	const registerPal = () => {
		hasPals = [...hasPals, editPal];
		storage.registerPal(hasPals);
	};

	const deletePal = (index: number) => {
		hasPals = hasPals.filter((_, i) => i !== index);
		storage.registerPal(hasPals);
	};
</script>

<p>登録</p>
<p>{selected ? getDisplayPalFullName(selected) : ''}</p>
<select bind:value={selected}>
	{#each Object.values(palMap) as pal}
		<option value={pal}>{getDisplayPalFullName(pal)}</option>
	{/each}
</select>
{#if selected}
	性別:
	<label>
		<input type="radio" bind:group={gender} name="radioValue" value={1} />
		♂
	</label>
	<label>
		<input type="radio" bind:group={gender} name="radioValue" value={2} />
		♀
	</label>
	<div>パッシブスキル</div>
	<div>
		{#each skils as skil}
			<select bind:value={skil}>
				{#each _skilList as skilCandidate}
					<option value={skilCandidate}>{skilCandidate.name}</option>
				{/each}
			</select>
		{/each}
	</div>
	<div>
		ニックネーム
		<input type="text" bind:value={alias} />
	</div>
	<div>
		<button on:click={registerPal}>登録</button>
	</div>
{/if}

<ul>
	{#each hasPals as hasPal, i}
		<li>
			{#if hasPal.alias}
				{hasPal.alias}({hasPal.name})
			{:else}
				{hasPal.name}
			{/if}
			{hasPal.gender === 1 ? '♂' : '♀'}
			{#each hasPal.skils.filter((skil) => skil.name !== dummySkil.name) as skil, j}
				{#if j !== 0},{/if}{skil.name}
			{/each}
			<button on:click={() => deletePal(i)}>削除</button>
		</li>
	{/each}
</ul>

<script lang="ts">
	import { type PalType, type ParentToChildMap, type PalMap, getImgPath } from '$lib/util/pal';
	import _pals from '$lib/assets/pal.json';
	import _combination from '$lib/assets/combination.json';
	import { getDisplayPalFullName } from '$lib/util/pal';
	import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';

	const parentToChildMap = _combination as ParentToChildMap;
	const palMap = _pals as PalMap;

	let selected: PalType;
	$: imgPath = selected ? getImgPath(selected) : '';
	$: combos = selected
		? Object.entries(parentToChildMap[selected?.name]).map(([parent2, result]) => [
				selected,
				palMap[parent2],
				palMap[result]
			])
		: [];
</script>

<p>順引き検索</p>
<p>{selected ? getDisplayPalFullName(selected) : ''}</p>
{#if selected}
	<div class="card-display">
		<div class="card-container">
			<Card>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<h2
							class="mdc-typography--headline6"
							style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
						>
							A card with 16x9 media.
						</h2>
					</MediaContent>
				</Media>
				<Content style="color: #888;">Here's some gray text down here.</Content>
			</Card>
		</div>
		<div class="card-container">
			<Card style="min-width: 300px;">
				<Media class="card-media-square" aspectRatio="square">
					<MediaContent>
						<!-- <img src={getImgPath(selected)} alt="" /> -->
						<h2
							class="mdc-typography--headline6"
							style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
						>
							A card with 16x9 media.
						</h2>
					</MediaContent>
				</Media>
			</Card>
		</div>
	</div>
{/if}
<select bind:value={selected}>
	{#each Object.values(_pals) as pal}
		<option value={pal}><img src={getImgPath(pal)} alt="" /> {getDisplayPalFullName(pal)}</option>
	{/each}
</select>
{#if selected}
	<ul>
		{#each combos as combo}
			<li>{combo[0].name} × {combo[1].name} = {combo[2].name}</li>
		{/each}
	</ul>
{/if}

<div style="imgPath:{imgPath};"></div>

<style>
	* :global(.card-display) {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
	}

	* :global(.card-container) {
		display: inline-flex;
		/* justify-content: center; */
		align-items: center;
		min-height: 200px;
		width: 380px;
		max-width: 100%;
		overflow-x: auto;
		background-color: var(--mdc-theme-background, #f8f8f8);
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));

		padding: 20px;

		margin-right: 20px;
		margin-bottom: 20px;
	}

	* :global(.card-container > *) {
		margin: 0 auto;
	}

	@media (max-width: 480px) {
		* :global(.card-container) {
			margin-right: 0;
			padding-right: 0;
			padding-left: 0;
		}
	}
	p {
		color: #333;
		font-family: 'Helvetica', 'Arial', sans-serif;
	}

	select {
		padding: 8px;
		border-radius: 4px;
		border: 1px solid #ccc;
		background-color: #fff;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	option {
		padding: 10px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		background-color: #f0f0f0;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 4px;
		border: 1px solid #ddd;
	}

	li:hover {
		background-color: #e9e9e9;
	}
</style>

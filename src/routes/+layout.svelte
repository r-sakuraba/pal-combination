<script lang="ts">
	import { base } from '$app/paths';
	import Textfield from '@smui/textfield';
	let textValue: string = '';
	import '../theme/_smui-theme.scss';
</script>

<svelte:head>
	<!-- Material Icons -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<!-- Roboto -->
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/>
	<!-- Roboto Mono -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono" />
	<!-- css -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
	/>
	<!-- <link rel="stylesheet" href="{base}/smui.css" /> -->
</svelte:head>

<h1>パル配合シミュレーション</h1>
<nav>
	<a href="{base}/">順引き検索</a>
	<a href="{base}/reverse">逆引き検索</a>
	<a href="{base}/find">探索</a>
	<a href="{base}/register">登録</a>
</nav>

<slot />

<style>
	h1,
	nav {
		text-align: center;
	}
</style>

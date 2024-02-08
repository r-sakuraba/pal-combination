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
	<!-- <a href="{base}/">順引き検索</a>
	<a href="{base}/reverse">逆引き検索</a> -->
	<a href="{base}/find">探索</a>
	<a href="{base}/register">登録</a>
	<a href="{base}/not-have">所持</a>
</nav>
<style>
h1 {
	width: 726px;
	height: 80px;
	line-height: 80px;
	text-align: center;
	background-color: #333;
	color: #fff;
}
nav {
  list-style: none;
  overflow: hidden;
}
 
a {
  width: 140px;
  text-align: center;
  background-color: #333;
  float: left;
  height: 10px;
  line-height: 10px;
  margin-right: 2px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 20px;
}

a:hover{
	background-color: #5b5b5b;
}
 

</style>

<slot />

<style>
	h1,
	nav {
		text-align: center;
	}
</style>

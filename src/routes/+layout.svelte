<script lang="ts">
	import { base } from '$app/paths';
	import { Col, Container, Nav, NavItem, NavLink, Row } from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';
</script>

<Styles></Styles>

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

<Container>
	<Row>
		<Col>
			<div style="text-align: center;">
				<h1>パル配合シミュレーション</h1>
			</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<Nav tabs fill>
				<NavItem active>
					<NavLink href="{base}/find">探索</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="{base}/register">登録</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="{base}/not-have">所持</NavLink>
				</NavItem>
			</Nav>
		</Col>
	</Row>
</Container>

<slot />

<style lang="scss">
	:global(.male) {
		color: var(--bs-info);
	}

	:global(.female) {
		color: var(--bs-danger);
	}
	/* h1 {
		margin: 0 auto;
		width: 60%;
		height: 80px;
		line-height: 80px;
		text-align: center;
		background-color: var(--mdc-theme-primary);
		color: #fff;
	} */

	/* div {
		display: flex;
		justify-content: center;
	}
	nav {
		margin-top: 2px;
		list-style: none;
		overflow: hidden;
	} */

	/* a {
		width: 20%;
		text-align: center;
		background-color: var(--mdc-theme-primary);
		float: left;
		height: 10px;
		line-height: 10px;
		margin-right: 2px;
		text-decoration: none;
		color: #fff;
		font-weight: bold;
		padding: 20px;
		box-sizing: border-box;
	}

	a:hover {
		background-color: #5b5b5b;
	} */
</style>

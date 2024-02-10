<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { Col, Container, Nav, NavItem, NavLink, Row } from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';

	let path;

	$: path = $page.url.pathname;
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
</svelte:head>

<Container class="sticky-top header-bg">
	<Row>
		<Col>
			<div style="text-align: center;">
				<h1>パル配合シミュレーション</h1>
			</div>
		</Col>
	</Row>
	<Row>
		<Col class="nav-color">
			<Nav tabs underline fill>
				<NavItem active>
					<NavLink
						class="nav-color-a"
						href="{base}/find"
						active={$page.url.pathname === `${base}/find`}>探索</NavLink
					>
				</NavItem>
				<NavItem>
					<NavLink
						class="nav-color-a"
						href="{base}/register"
						active={$page.url.pathname === `${base}/register`}
					>
						登録
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						class="nav-color-a"
						href="{base}/not-have"
						active={$page.url.pathname === `${base}/not-have`}
					>
						所持
					</NavLink>
				</NavItem>
			</Nav>
		</Col>
	</Row>
</Container>

<slot />

<style lang="scss">
	:global(.header-bg) {
		background-color: #517d99;
		color: #fff;
	}
	:global(.nav-color) {
		background-color: #6ac1b7;
		color: #fff;
	}

	:global(.nav-color-a) {
		background-color: #6ac1b7;
		color: #fff;
	}

	:global(.male) {
		color: var(--bs-info);
	}

	:global(.female) {
		color: var(--bs-danger);
	}

	:global(.list-group-item) {
		background-color: #bfe9db;
	}

	:root {
		--bs-font-family: 'Kosugi Maru', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
			'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}

	:global(.btn, .btn-primary, body, .nav-color-a) {
		--bs-body-bg: #dfefed;
		// --bs-body-bg: #f4f5f7;
		--bs-nav-underline-link-active-color: #fff;
		--bs-nav-tabs-link-active-bg: #48aca0;
		--bs-nav-tabs-link-active-border-color: #fff;
		--bs-nav-link-color: #fff;
		--bs-nav-link-hover-color: #fff;
		--bs-border-color: #fff;
		--bs-btn-bg: #6ac1b7;
		--bs-btn-color: #fff;
		--bs-btn-border-color: #6ac1b7;
		--bs-btn-hover-bg: #48aca0;
		--bs-btn-hover-border-color: #48aca0;
		--bs-btn-disabled-bg: #6ac1b7;
		--bs-btn-disabled-border-color: #6ac1b7;
		--bs-btn-active-bg: #6ac1b7;
		--bs-btn-active-border-color: #6ac1b7;
		--bs-primary-rgb: 81, 125, 153;
		--bs-body-font-family: 'Kosugi Maru', system-ui, -apple-system, 'Segoe UI', Roboto,
			'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		// --bs-border-color: #fff;
		// --bs-blue: #0d6efd;
		// --bs-indigo: #6610f2;
		// --bs-purple: #6f42c1;
		// --bs-pink: #d63384;
		// --bs-red: #dc3545;
		// --bs-orange: #fd7e14;
		// --bs-yellow: #ffc107;
		// --bs-green: #198754;
		// --bs-teal: #20c997;
		// --bs-cyan: #0dcaf0;
		// --bs-black: #000;
		// --bs-white: #fff;
		// --bs-gray: #6c757d;
		// --bs-gray-dark: #343a40;
		// --bs-gray-100: #f8f9fa;
		// --bs-gray-200: #e9ecef;
		// --bs-gray-300: #dee2e6;
		// --bs-gray-400: #ced4da;
		// --bs-gray-500: #adb5bd;
		// --bs-gray-600: #6c757d;
		// --bs-gray-700: #495057;
		// --bs-gray-800: #343a40;
		// --bs-gray-900: #212529;
		// --bs-primary: #81689d;
		// --bs-secondary: #6c757d;
		// --bs-success: #198754;
		// --bs-info: #0dcaf0;
		// --bs-warning: #ffc107;
		// --bs-danger: #dc3545;
		// --bs-light: #f8f9fa;
		// --bs-dark: #212529;
		// --bs-primary-rgb: 71, 79, 122;
		// --bs-secondary-rgb: 108, 117, 125;
		// --bs-success-rgb: 25, 135, 84;
		// --bs-info-rgb: 13, 202, 240;
		// --bs-warning-rgb: 255, 193, 7;
		// --bs-danger-rgb: 220, 53, 69;
		// --bs-light-rgb: 248, 249, 250;
		// --bs-dark-rgb: 33, 37, 41;
		// --bs-primary-text-emphasis: #ffd0ec;
		// --bs-secondary-text-emphasis: #2b2f32;
		// --bs-success-text-emphasis: #0a3622;
		// --bs-info-text-emphasis: #055160;
		// --bs-warning-text-emphasis: #664d03;
		// --bs-danger-text-emphasis: #58151c;
		// --bs-light-text-emphasis: #495057;
		// --bs-dark-text-emphasis: #495057;
		// --bs-primary-bg-subtle: #cfe2ff;
		// --bs-secondary-bg-subtle: #e2e3e5;
		// --bs-success-bg-subtle: #d1e7dd;
		// --bs-info-bg-subtle: #cff4fc;
		// --bs-warning-bg-subtle: #fff3cd;
		// --bs-danger-bg-subtle: #f8d7da;
		// --bs-light-bg-subtle: #fcfcfd;
		// --bs-dark-bg-subtle: #ced4da;
		// --bs-primary-border-subtle: #474f7a;
		// --bs-secondary-border-subtle: #c4c8cb;
		// --bs-success-border-subtle: #a3cfbb;
		// --bs-info-border-subtle: #9eeaf9;
		// --bs-warning-border-subtle: #ffe69c;
		// --bs-danger-border-subtle: #f1aeb5;
		// --bs-light-border-subtle: #e9ecef;
		// --bs-dark-border-subtle: #adb5bd;
		// --bs-white-rgb: 255, 255, 255;
		// --bs-black-rgb: 0, 0, 0;
		// --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
		// 	'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		// 	'Segoe UI Symbol', 'Noto Color Emoji';
		// --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
		// 	monospace;
		// --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
		// --bs-body-font-family: var(--bs-font-sans-serif);
		// --bs-body-font-size: 1rem;
		// --bs-body-font-weight: 400;
		// --bs-body-line-height: 1.5;
		// --bs-body-color: #212529;
		// --bs-body-color-rgb: 33, 37, 41;
		// --bs-body-bg: #fff;
		// --bs-body-bg-rgb: 255, 255, 255;
		// --bs-emphasis-color: #000;
		// --bs-emphasis-color-rgb: 0, 0, 0;
		// --bs-secondary-color: rgba(33, 37, 41, 0.75);
		// --bs-secondary-color-rgb: 33, 37, 41;
		// --bs-secondary-bg: #e9ecef;
		// --bs-secondary-bg-rgb: 233, 236, 239;
		// --bs-tertiary-color: rgba(33, 37, 41, 0.5);
		// --bs-tertiary-color-rgb: 33, 37, 41;
		// --bs-tertiary-bg: #f8f9fa;
		// --bs-tertiary-bg-rgb: 248, 249, 250;
		// --bs-heading-color: inherit;
		// --bs-link-color: #ffd0ec;
		// --bs-link-color-rgb: 13, 110, 253;
		// --bs-link-decoration: underline;
		// --bs-link-hover-color: #0a58ca;
		// --bs-link-hover-color-rgb: 10, 88, 202;
		// --bs-code-color: #d63384;
		// --bs-highlight-bg: #fff3cd;
		// --bs-border-width: 1px;
		// --bs-border-style: solid;
		// --bs-border-color: #dee2e6;
		// --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
		// --bs-border-radius: 0.375rem;
		// --bs-border-radius-sm: 0.25rem;
		// --bs-border-radius-lg: 0.5rem;
		// --bs-border-radius-xl: 1rem;
		// --bs-border-radius-xxl: 2rem;
		// --bs-border-radius-2xl: var(--bs-border-radius-xxl);
		// --bs-border-radius-pill: 50rem;
		// --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		// --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		// --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
		// --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
		// --bs-focus-ring-width: 0.25rem;
		// --bs-focus-ring-opacity: 0.25;
		// --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
		// --bs-form-valid-color: #198754;
		// --bs-form-valid-border-color: #198754;
		// --bs-form-invalid-color: #dc3545;
		// --bs-form-invalid-border-color: #dc3545;
		// --bs-body-bg: #e9d7d2;
		// --bs-btn-color: #e9d7d2;
		// --bs-body-color: #81689d;
		// --bs-primary: #474f7a;
	}

	:global(.btn-outline-primary) {
		background-color: transparent !important;
		color: #6ac1b7 !important;
		border-color: #6ac1b7 !important;
		&:hover {
			background-color: #48aca0 !important;
			color: #fff !important;
			border-color: #48aca0 !important;
		}
		&:disabled {
			background-color: #6ac1b7 !important;
			color: #fff !important;
			border-color: #6ac1b7 !important;
		}
		&:active {
			background-color: #6ac1b7 !important;
			color: #fff !important;
			border-color: #6ac1b7 !important;
		}
	}

	:global(.btn-outline-primary-no-hover) {
		background-color: transparent !important;
		color: #6ac1b7 !important;
		border-color: #6ac1b7 !important;
		&:hover {
			background-color: transparent !important;
			color: #6ac1b7 !important;
			border-color: #6ac1b7 !important;
		}
		&:disabled {
			background-color: #6ac1b7 !important;
			color: #fff !important;
			border-color: #6ac1b7 !important;
		}
		&:active {
			background-color: transparent !important;
			color: #6ac1b7 !important;
			border-color: #6ac1b7 !important;
		}
	}

	// :global(.btn-outline-primary) {
	// 	--bs-btn-bg: transparent;
	// 	--bs-btn-color: #6ac1b7;
	// 	--bs-btn-border-color: #6ac1b7;
	// 	--bs-btn-hover-bg: #48aca0;
	// 	--bs-btn-hover-border-color: #48aca0;
	// 	--bs-btn-disabled-bg: #6ac1b7;
	// 	--bs-btn-disabled-border-color: #6ac1b7;
	// 	--bs-btn-active-bg: #6ac1b7;
	// 	--bs-btn-active-border-color: #6ac1b7;
	// }

	// :global(.btn-outline-primary-no-hover) {
	// 	--bs-btn-bg: transparent;
	// 	--bs-btn-color: #6ac1b7;
	// 	--bs-btn-border-color: #6ac1b7;
	// 	--bs-btn-hover-bg: transparent;
	// 	--bs-btn-hover-color: #6ac1b7;
	// 	--bs-btn-hover-border-color: #6ac1b7;
	// 	--bs-btn-active-bg: transparent;
	// 	--bs-btn-active-color: #6ac1b7;
	// 	--bs-btn-active-border-color: #6ac1b7;
	// }
</style>

<script lang="ts">
	import { base } from '$app/paths';
</script>

<h1>パル配合シミュレーション</h1>
<nav>
	<a href="{base}/">順引き検索</a>
	<a href="{base}/reverse">逆引き検索</a>
	<a href="{base}/find">探索</a>
	<a href="{base}/register">登録</a>
</nav>

<slot />

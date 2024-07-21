<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<meta name="author" content="BackBegin" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 100vh;
	}
</style>

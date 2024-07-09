<script>
	import introduction from '$lib/images/introduction.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" />
</svelte:head>

<section>
	<h1>
		Let's find companions <br />
		to spend our leisure time together
	</h1>
	<a href="/events">
		<button>Browse events</button>
	</a>
	<img src={introduction} alt="introduction" />
</section>

<style>
	section {
		display: flex;
		font-size: 1.2em;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	img {
		margin-top: 3em;
		margin-bottom: 3em;
		max-width: 700px;
		max-width: 100%;
	}
</style>

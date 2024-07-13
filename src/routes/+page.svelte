<script lang="ts">
	import introduction from '$lib/images/introduction.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="title" content="Home" />
	<meta name="description" content="Home page" />
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
		margin-top: 8vh;
		max-width: 100%;
		margin-bottom: 15vh;
	}

	h1 {
		font-size: 6.3vh;
		margin-top: 8vh;
	}

	button {
		margin-top: 8vh;
		margin-bottom: 8vh;
	}

	button:hover {
		background-color: #5AD869;
	}
</style>

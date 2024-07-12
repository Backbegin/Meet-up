<script>
	import Header from './Header.svelte';
	import phone from '$lib/images/phone.png';
	import mail from '$lib/images/mail.png';
	import telegram from '$lib/images/telegram.png';
	import '../app.css';
</script>

<svelte:head>
	<meta name="author" content="BackBegin" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Any questions or suggestions? Contact us:</p>
		<div>
			<a href="mailto:">
				<img src={phone} alt="phone" />
			</a>
			<a href="mailto:d.troegubov@innopolis.university">
				<img src={mail} alt="mail" />
			</a>
			<a href="https://t.me/BogGoro">
				<img src={telegram} alt="telegram" />
			</a>
		</div>
	</footer>
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		font-size: 2em;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: #faecf9;
		color: #b129aa;
		padding: 0.1em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

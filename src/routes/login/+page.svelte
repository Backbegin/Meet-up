<svelte:head>
	<title>Login</title>
	<meta name="login" />
</svelte:head>

<div class="text-column">
	<div class="registration-window">
		<h1>Enter your account</h1>
		Email address
		<input />
		<div class="password-row">
			Password
			<a href="/login"> Forgot password? </a>
		</div>
		<input />
		<div class="center">
			<button>Log in</button>
		</div>
		<div class="new-in-meetup">
			New in Meet Up? <a href="/signup">Create an account</a>
		</div>
	</div>
</div>

<style>
	.password-row {
		display: flex;
		justify-content: space-between;
	}
	.password-row a {
		color: var(--color-text1);
	}
	.new-in-meetup {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #000000;
		border-radius: 0.5em;
		background-color: white;
		min-height: 2em;
	}
</style>

<svelte:head>
	<title>Login</title>
	<meta name="login" />
</svelte:head>

<div class="text-column">
	<form class="registration-window" method="POST">
		<h1>Enter your account</h1>
		<label>
			Email address
			<input name="email" type="email" />
		</label>
		<label>
			<div class="password-row">
				Password
				<a href="/login"> Forgot password? </a>
			</div>
			<input name="password" type="password" />
		</label>
		<div class="center">
			<button>Log in</button>
		</div>
		<div class="new-in-meetup">
			New in Meet Up? <a href="/signup">Create an account</a>
		</div>
	</form>
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

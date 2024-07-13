<svelte:head>
	<title>Login</title>
	<meta name="login" />
</svelte:head>

<div class="text-column">
	<form class="registration-window" method="POST">
		<h1>Create your account</h1>
		<label>
			User name
			<input name="username" type="username" />
		</label>
		<label>
			Email
			<input name="email" type="email" />
		</label>
		<label>
			Password
			<input name="password" type="password" />
		</label>
		<div class="center">
			<button>Sign up</button>
		</div>
		<div class="account-in-meetup">
			Already have an account? <a href="/login">Log in</a>
		</div>
	</form>
</div>

<style>
	.account-in-meetup {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #000000;
		border-radius: 0.5em;
		background-color: white;
		min-height: 2em;
	}
</style>

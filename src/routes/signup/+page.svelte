<svelte:head>
	<title>Login</title>
	<meta name="login"/>
</svelte:head>

<div class="text-column">
	<div class="registration-window">
		<h1>Create your account</h1>
		User name
		<input>
		Email address
		<input>
		Password
		<input>
		<button>Sign up</button>
		<div class="account-in-meetup">
			Already have an account? <a href="/signup">Log in</a>
		</div>
	</div>
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
<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a href="/">Meet Up</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href={$page.url.pathname === '/about' ? undefined : '/about'}>About site</a>
			</li>
			<li aria-current={$page.url.pathname === '/events' ? 'page' : undefined}>
				<a href={$page.url.pathname === '/events' ? undefined : '/events'}>Events</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href={$page.url.pathname === '/' ? undefined : '/'}>Home</a>
			</li>
			<li
				aria-current={$page.url.pathname === '/login' || $page.url.pathname === '/signup'
					? 'page'
					: undefined}
			>
				<a href="/login">
					<button>Log in</button>
				</a>
			</li>
			<li
				aria-current={$page.url.pathname === '/login' || $page.url.pathname === '/signup'
					? 'page'
					: undefined}
			>
				<a href="/signup">
					<button>Sign up</button>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		margin: 0.5em 3.8%;
		font-size: 1.5em;
		color: var(--color-theme-1);
	}

	.corner a:hover {
		color: var(--color-text1);
	}

	nav {
		display: flex;
		justify-content: center;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		margin-right: 0.5em;
	}

	ul {
		position: relative;
		font-size: large;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text1);
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.corner a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-theme-1);
		text-decoration: none;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	li[aria-current='page'] a {
		color: color-mix(in srgb, var(--color-text1), var(--color-theme-1));
	}

	li[aria-current='page'] a:hover {
		color: color-mix(in srgb, var(--color-text1), var(--color-theme-1));
	}

	button:hover {
		background-color: var(--color-theme-1-lighten);
	}
</style>

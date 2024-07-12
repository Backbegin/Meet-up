<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Error {$page.status} {$page.error?.message}</h1>
<p>Oops, looks like the page you requested was not found.</p>

<style>
	p {
		font-size: 2rem;
		text-align: center;
		font-weight: 50;
	}
</style>

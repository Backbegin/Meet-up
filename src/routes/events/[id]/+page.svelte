<script lang="ts">
	import { page } from '$app/stores';
	import type { Event } from '$lib/types/event';

	interface MyDataType {
		error: string;
		event: Event;
	}

	export let data: MyDataType;

	$: ({ event } = data);
	$: ({ error } = data);
	let id = $page.params.id;
</script>

{#if error !== null}
	<h1>{error}</h1>
{:else}
	<h1>Here will be single event page</h1>
	<a href="/events/{id}/edit">
		<button> Edit event </button>
	</a>
	<div>{event.title} - {event.description} - {event.place} - {event.date} - {event.time}</div>
{/if}

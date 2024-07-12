<script lang="ts">
	import type { Event } from '$lib/types/event';

	interface MyDataType {
		error: string;
		event: Event;
	}

	export let data: MyDataType;

	$: ({ event } = data);
	$: ({ error } = data);
</script>

{#if error !== null}
	<h1>{error}</h1>
{:else}
	<h1>Here will be single event page</h1>
	<a href="/events/{event.id}/edit">
		<button> Edit event </button>
	</a>
	<div>{event.title} - {event.description} - {event.place} - {event.date} - {event.time}</div>
{/if}

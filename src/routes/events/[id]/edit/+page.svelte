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
	<h1>Here will be event editing</h1>
	<div>{event.title} - {event.description} - {event.place} - {event.date} - {event.time}</div>
{/if}

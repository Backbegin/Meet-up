<script lang="ts">
	import type { Event } from '$lib/types/event';

	interface MyDataType {
		error: string | null;
		event: Event | null;
	}

	export let data: MyDataType;

	$: ({ event } = data);
	$: ({ error } = data);
</script>

<svelte:head>
	<title>{event?.title || 'Event not found'}</title>
	<meta name="description" content={event?.brief || 'Event does not exist in the database'} />
</svelte:head>

{#if error !== null}
	<h1>{error}</h1>
{:else}
	<h1>Here will be single event page</h1>
	<a href="/events/{event?.id}/edit">
		<button> Edit event </button>
	</a>
	<div>{event?.title} - {event?.brief} - {event?.place} - {event?.time} - {event?.time}</div>
{/if}

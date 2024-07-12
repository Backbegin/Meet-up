<script lang="ts">
	import type { Event } from '$lib/types/event';

	interface MyDataType {
		events: Event[];
	}

	export let data: MyDataType;

	$: ({ events } = data);
</script>

<svelte:head>
	<title>Events</title>
	<meta name="description" content="All created events" />
</svelte:head>

<div class="text-column">
	<h1>Here are all the events</h1>
	<a href="/events/new">
		<button>New event</button>
	</a>
	<div class="event-grid">
		{#each events as event}
			<div>
				<a href="/events/{event.id}">
					{event.title} - {event.place} - {event.date} - {event.time}
				</a>
			</div>
		{/each}
	</div>
</div>

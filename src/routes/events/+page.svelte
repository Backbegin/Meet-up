<script lang="ts">
	import { getAllEvents } from '$lib/api';
	import { type Event } from '$lib/types/event';
	import { onMount } from 'svelte';
	import EventCard from './EventCard.svelte';

	let events: Event[] = [];
	onMount(async () => {
		try {
			events = await getAllEvents();
		} catch (error) {
			console.error('Error fetching events:', error);
		}
	});
</script>

<svelte:head>
	<title>Events</title>
	<meta name="description" content="All created events" />
</svelte:head>

<div class="events-page-container">
	<h1>Here are all the events</h1>
	<a href="/events/new">
		<button>New event</button>
	</a>
	<div class="event-grid">
		{#each events as event}
			<EventCard data={event} />
		{/each}
	</div>
</div>

<style>
	.events-page-container {
		display: flex;
		max-width: 72rem;
		flex: 0.6;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}
	.event-grid {
		margin: 2rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 2.5rem;
		align-items: stretch;
		justify-content: space-evenly;
		width: fit-content;
	}
</style>

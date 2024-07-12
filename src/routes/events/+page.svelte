<script>
	let events = [
		{ id: 1, name: 'first event', place: 'Innopolis University', day: '12.07.2024', time: '13:50' },
		{
			id: 2,
			name: 'second event',
			place: 'Innopolis University',
			day: '12.07.2024',
			time: '13:50'
		},
		{ id: 3, name: 'third event', place: 'Innopolis University', day: '12.07.2024', time: '13:50' },
		{ id: 4, name: 'fourth event', place: 'Innopolis University', day: '12.07.2024', time: '13:50' }
	];
</script>

<svelte:head>
	<title>Events</title>
	<meta name="description" content="All created events" />
</svelte:head>

<div class="text-column">
	<h1>Here is all of the events</h1>
	<a href="/events/new">
		<button>New event</button>
	</a>
	<div class="event-grid">
		{#each events as event}
			<div>
				<a href="/events/{event.id}">
					{event.name} - {event.place} - {event.day} - {event.time}
				</a>
			</div>
		{/each}
	</div>
</div>

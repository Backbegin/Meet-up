<script lang="ts">
	import { deleteEvent } from '$lib/api';
	import type { EventPageDataType } from '$lib/types/event';
	import dayjs from 'dayjs';
	import localizedFormat from 'dayjs/plugin/localizedFormat';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(localizedFormat);
	dayjs.extend(relativeTime);

	export let data: EventPageDataType;
	let event = data.post;

	export function deleteThisEvent() {
		deleteEvent(event.id, event.authorId);
	}
</script>

<svelte:head>
	<title>{event?.title || 'Event not found'}</title>
	<meta name="description" content={event?.brief || 'Event does not exist in the database'} />
</svelte:head>

<div class="event-description">
	<h1 id="event-title">{event.title}</h1>
	<div id="editor-buttons">
		<a href="/events/{event.id}/edit">
			<button id="edit-button">🖉</button>
		</a>
		<button>❌</button>
	</div>
	<p class="event-card-time">
		🕙 {dayjs.unix(Number.parseInt(event.time)).format('llll')} ({dayjs
			.unix(Number.parseInt(event.time))
			.fromNow()})
	</p>
	<p class="event-card-place">📍 {event.place}</p>
	<p class="event-card-brief">{event.brief}</p>
	<p class="event-card-text">{event.text}</p>
</div>

<style>
	button {
		padding: 0;
		width: 2rem;
		margin: 0.25rem;
	}
	.event-description {
		margin: 0 auto;
		max-width: 70rem;
		min-width: 28rem;
	}

	#event-title {
		margin: 0;
		font-weight: 400;
	}

	#editor-buttons {
		display: flex;
		flex-direction: row;
		justify-content: left;
	}
	.event-card-time,
	.event-card-place {
		margin: 0;
		margin-bottom: 0.125rem;
		font-size: normal;
	}
	.event-card-brief {
		margin: 0;
		font-size: larger;
	}
	.event-card-text {
		margin-top: 1rem;
	}
</style>

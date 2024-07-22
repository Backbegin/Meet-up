<script lang="ts">
	import type { Event } from '$lib/types/event';
	import dayjs from 'dayjs';
	import localizedFormat from 'dayjs/plugin/localizedFormat';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(localizedFormat);
	dayjs.extend(relativeTime);

	export let data: Event;
</script>

<a href="/events/{data.id}">
	<div class="event-card rotateXY">
		<div class="event-card-title">
			<h2>{data.title}</h2>
		</div>
		<p class="event-card-time">
			🕙 {dayjs.unix(Number.parseInt(data.time)).format('llll')} ({dayjs
				.unix(Number.parseInt(data.time))
				.fromNow()})
		</p>
		<p class="event-card-place">📍 {data.place}</p>
		<div class="event-card-brief">
			<p>{data.brief}</p>
		</div>
	</div>
</a>

<style>
	a {
		color: black;
		text-decoration: none;
		max-width: 29%;
		min-width: 20rem;
		height: 15rem;
	}
	a:hover {
		text-decoration: none;
	}
	.event-card {
		background-color: white;
		border-radius: 0.5rem;
		width: 100%;
		height: 100%;
		min-width: 20rem;
		padding: 0.5rem;
		overflow-y: hidden;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.rotateXY:hover {
		transform-style: preserve-3d;
		transform-origin: bottom;
		transform: rotate3d(1, 1, 0, 7deg);
	}
	a:nth-child(odd) .event-card {
		border: 0.125rem solid var(--color-text1);
		background: linear-gradient(white 50%, color-mix(in srgb, white 90%, var(--color-text1) 10%));
		box-shadow: 0.5rem 0.25rem 0.25rem
			color-mix(in srgb, rgba(0, 0, 0, 0.5) 90%, var(--color-text1) 10%);
	}

	a:nth-child(even) .event-card {
		border: 0.125rem solid var(--color-theme-1);
		background: linear-gradient(white 50%, color-mix(in srgb, white 90%, var(--color-theme-1) 10%));
		box-shadow: 0.5rem 0.25rem 0.25rem
			color-mix(in srgb, rgba(0, 0, 0, 0.5) 90%, var(--color-theme-1) 10%);
	}
	.event-card-title {
		font-size: x-large;
		margin: 0;
		margin-bottom: 0.5rem;
		min-height: 3em;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.event-card div h2 {
		margin: 0;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: x-large;
	}
	.event-card-time,
	.event-card-place {
		margin: 0;
		margin-bottom: 0.125rem;
		font-size: small;
	}
	.event-card-brief {
		margin: 0;
		margin-top: 0.5rem;
		align-items: center;
		display: flex;
		justify-content: left;
		flex-direction: column;
		flex: auto;
	}
	.event-card-brief p {
		margin: 0;
		font-size: normal;
	}
</style>

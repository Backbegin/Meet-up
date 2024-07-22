<script lang="ts">
	import type { Event } from '$lib/types/event';
	import { onMount } from 'svelte';

	interface MyDataType {
		error: string;
		event: Event;
	}

	export let data: MyDataType;

	$: ({ event } = data);
	$: ({ error } = data);

	let title = '';
	let place = '';
	let time = '';
	let date = '';
	let brief = '';
	let text = '';
	let userId = 1;
	let eventId = 3;
	let errorMessage = '';

	const fetchEventDetails = async () => {
		const url = `https://zakyatbot.ru/event/${eventId}`;
		const response = await fetch(url);

		if (response.ok) {
			const event = await response.json();
			title = event.title;
			place = event.place;
			const [eventDate, eventTime] = event.time.split(' ');
			date = eventDate;
			time = eventTime;
			brief = event.brief;
			text = event.text;
		} else {
			console.error('Error fetching event details:', response.statusText);
		}
	};

	onMount(() => {
		fetchEventDetails();
	});

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		// Validation check
		if (!title || !place || !date || !brief) {
			errorMessage = 'Please fill in all required fields.';
			return;
		}

		errorMessage = '';

		const url = `https://zakyatbot.ru/event/edit/${eventId}?userId=${userId}`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				accept: '*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: title,
				place: place,
				text: text,
				brief: brief,
				time: date + ' ' + time
			})
		});

		if (response.ok) {
			const result = await response.json();
			console.log('Event updated:', result);
			window.history.back();
		} else {
			console.error('Error updating event:', response.statusText);
		}
	};
</script>

{#if error !== null}
	<h1>{error}</h1>
{:else}
	<div class="edit-event-container">
		<form class="edit-event-form" on:submit={handleSubmit}>
			<h2>Edit Event</h2>
			{#if errorMessage}
				<p class="error-message">{errorMessage}</p>
			{/if}
			<input type="text" bind:value={title} placeholder="Title" />
			<input type="text" bind:value={place} placeholder="Place" />
			<div class="date-time-container">
				<input type="date" bind:value={date} />
				<input type="time" bind:value={time} />
			</div>
			<textarea bind:value={brief} placeholder="Brief info"></textarea>
			<textarea bind:value={text} placeholder="Full description"></textarea>
			<div class="button-container">
				<button type="submit">Update</button>
				<button type="button" class="secondary-button" on:click={() => window.history.back()}
					>Cancel</button
				>
			</div>
		</form>
	</div>
{/if}

<style>
	.edit-event-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}
	.edit-event-form {
		background-color: #faf0f5;
		border: 1px solid #dcdcdc;
		padding: 2rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
		text-align: center;
	}
	.edit-event-form input,
	.edit-event-form textarea {
		width: 100%;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border: 1px solid black;
		border-radius: 0.25rem;
		box-sizing: border-box;
		height: 2.5rem;
	}
	.edit-event-form textarea {
		height: auto;
	}
	.button-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}
	.edit-event-form button,
	.button-container .secondary-button {
		font-family: Inria Serif;
		text-align: center;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.edit-event-form button {
		background-color: #28a745;
		color: white;
	}
	.edit-event-form button:hover {
		background-color: #218838;
	}
	.secondary-button {
		background-color: #dc3545;
		color: white;
	}
	.secondary-button:hover {
		background-color: #c82333;
	}
	.date-time-container {
		display: flex;
		gap: 0.5rem;
		width: 100%;
	}
	.date-time-container input {
		flex: 1;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border: 1px solid black;
		border-radius: 0.25rem;
		box-sizing: border-box;
		height: 2.5rem;
	}
	.error-message {
		color: #dc3545;
		margin-bottom: 1rem;
	}
</style>

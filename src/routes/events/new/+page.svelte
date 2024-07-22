<script lang="ts">
	import { type Event } from '$lib/types/event';

	let name = '';
	let place = '';
	let date = '';
	let time = '';
	let about = '';
	let userId = 1;

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const url = `https://zakyatbot.ru/event/save?name=${encodeURIComponent(name)}&place=${encodeURIComponent(place)}&date=${encodeURIComponent(date)}&userId=${userId}`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				accept: '*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name,
				place: place,
				date: date,
				userId: userId
			})
		});

		if (response.ok) {
			const result = await response.json();
			console.log('Event created:', result);
		} else {
			console.error('Error creating Event:', response.statusText);
		}
	};
</script>

<div class="create-Event-container">
	<form class="create-Event-form" on:submit={handleSubmit}>
		<h2>Create your Event</h2>
		<input type="text" bind:value={name} placeholder="Title" />
		<input type="text" bind:value={place} placeholder="Place" />
		<div class="date-time-container">
			<input type="date" bind:value={date} />
			<input type="time" bind:value={time} />
		</div>
		<textarea bind:value={about} placeholder="About"></textarea>
		<button type="submit">Create</button>
	</form>
</div>

<style>
	.create-Event-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}
	.create-Event-form {
		background-color: #faf0f5;
		border: 1px solid #dcdcdc;
		padding: 2rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
		text-align: center;
	}
	.create-Event-form input,
	.create-Event-form textarea {
		width: 100%;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border: 1px solid black;
		border-radius: 0.25rem;
		box-sizing: border-box;
		height: 2.5rem;
	}
	.create-Event-form button {
		font-family: Inria Serif;
		text-align: center;
		background-color: #28a745;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.create-Event-form button:hover {
		background-color: #218838;
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
</style>

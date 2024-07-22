import { getEvent } from '$lib/api';
import type { Event, EventPageParams } from '$lib/types/event';
import { error } from '@sveltejs/kit';

export async function load({ params }: EventPageParams) {
	let post: Event | null;
	try {
		post = await getEvent(Number.parseInt(params.id));
		post!.id = Number.parseInt(params.id);
	} catch (e) {
		console.error('EventLoad', e);
		post = null;
	}

	if (!post) throw error(404);

	return {
		post
	};
}

import { supabase } from '$lib/supabaseClient';
import type { Event } from '$lib/types/event';

export const load = async ({ params }) => {
	const { data: events } = await supabase.from('events').select().eq('id', params.id);
	if (!events || events.length === 0) {
		// Handle the case where no course is found for the ID
		return { error: 'Event not found', event: null };
	}
	const event = events[0] as Event;
	return {
		error: null,
		event: event
	};
};

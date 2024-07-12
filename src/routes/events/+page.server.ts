import { supabase } from '$lib/supabaseClient';
import type { Event } from '$lib/types/event';

export async function load() {
	const { data: events } = await supabase.from('events').select();
	return {
		events: events as Event[]
	};
}

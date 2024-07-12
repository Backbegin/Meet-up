import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const supabase = createClient(env.PRIVATE_SUPABASE_URL!, env.PRIVATE_SUPABASE_KEY!);

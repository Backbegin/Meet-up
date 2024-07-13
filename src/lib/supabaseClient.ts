import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { PRIVATE_SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient(PUBLIC_SUPABASE_URL!, PRIVATE_SUPABASE_KEY!);

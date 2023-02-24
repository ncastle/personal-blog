// handles supabase session client-side
import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

// load function gets current supabase session
export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	return { session };
};

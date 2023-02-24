// handles supabase session server-side
import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

// load function gets server-side supabase session
export const load: LayoutServerLoad = async (event) => {
	return {
		session: await getServerSession(event)
	};
};

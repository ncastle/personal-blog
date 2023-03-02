<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Nav from '$components/Nav.svelte';

	onMount(() => {
		// get subscription to supabase database
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			// invalidate supabase auth when auth state changes
			invalidate('supabase:auth');
		});

		// unsubscribe when app unmounts
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		padding: 1rem;
		height: calc(100vh - 3rem);
	}
</style>

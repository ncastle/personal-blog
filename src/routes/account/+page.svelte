<script lang="ts">
	import Auth from '$components/Auth.svelte';
	import { supabase } from '$lib/supabase';
	import type { AuthSession } from '@supabase/supabase-js';
	import { page } from '$app/stores';

	let loading = false;

	$: session = $page.data.session as AuthSession;
	$: user = session?.user;

	const signOut = async () => {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

{#if user}
	<h1>Welcome back, {user.email}</h1>
	<button type="button" on:click={signOut} hidden={!session}>Sign out</button>
{:else}
	<Auth />
{/if}

<style>
	h1 {
		text-align: center;
		display: inline;
	}

	button {
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
</style>

<script lang="ts">
	import { supabase } from '$lib/supabase';

	let loading = false;
	let email: string;

	// login function with One Time Password / Email 'Magic' Link
	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={handleLogin}>
	<h1>Login using magic link</h1>
	<input type="email" bind:value={email} />
	<input type="submit" value={loading ? 'Loading' : 'Log in with magic link'} disabled={loading} />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 30vw;
	}
</style>

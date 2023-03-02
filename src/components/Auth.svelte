<script lang="ts">
	import { supabase } from '$lib/supabase';

	let loading = false;
	let email: string;
	let password: string;
	let formMode: 'login' | 'signup' = 'login';
	$: modeString = formMode === 'login' ? 'Log In' : 'Sign Up';

	// login function with One Time Password / Email 'Magic' Link
	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithPassword({ email, password });
			if (error) throw error;
			alert('Successfully logged in!');
		} catch (error) {
			if (error instanceof Error) {
				console.log({ error });
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const handleSignUp = async () => {
		try {
			loading = true;
			const { data, error } = await supabase.auth.signUp({ email, password });
			console.log({ data });
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const handleSubmit = () => {
		if (formMode === 'signup') {
			handleSignUp();
		} else {
			handleLogin();
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<button type="button" on:click={() => (formMode = 'login')}>Login</button>
		<button type="button" on:click={() => (formMode = 'signup')}>Sign Up</button>
	</div>

	<h1>{modeString} using email & password</h1>
	<input type="email" bind:value={email} required />
	<input type="password" bind:value={password} required />
	<input type="submit" value={loading ? 'Loading' : modeString} disabled={loading} />
</form>

<style>
	form {
		margin: 2rem auto 0 auto;
		width: 60vw;
		border: 1px solid grey;
		border-radius: 1rem;
		box-shadow: 2px 2px 2px lightgrey, 4px 4px 4px grey;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	form > *:not(h1) {
		font-size: 1rem;
	}
	input {
		padding: 1rem;
		border-radius: 0.5rem;
	}
	input[type='submit'] {
		cursor: pointer;
	}

	button {
		padding: 0.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
	}
</style>

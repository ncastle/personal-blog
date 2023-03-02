<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { page } from '$app/stores';
	import type { AuthSession } from '@supabase/supabase-js';
	import type { ActionData } from './$types';
	import type { Post } from '$lib/types';

	export let form: ActionData;
	let loading = false;
	let errorMessage: string;

	$: session = $page.data.session as AuthSession;
	$: user = session?.user;

	let newPost: Post = {
		title: '',
		content: ''
	};

	const addPost = async (post: Post) => {
		if (!user) {
			alert('Must be logged in with valid user to submit post');
			return;
		}
		try {
			loading = true;
			// supabase insert to posts table
			// need user.id
			let { data: thePost, error } = await supabase
				.from('posts')
				.insert({ ...post, user_id: user.id })
				.select()
				.single();
			console.log({ thePost, error });
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				errorMessage = error.message;
			} else {
				errorMessage = 'Unexpected error, contact dev';
			}
			console.error(error);
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={() => addPost(newPost)}>
	<h1>Add a post</h1>
	<label for="title">Title</label>
	<input class="input" type="text" name="title" id="title" bind:value={newPost.title} required />

	<label for="content">Content</label>
	<textarea class="input" name="content" id="content" bind:value={newPost.content} required />

	<button class="input">Submit</button>

	{#if errorMessage}
		<p style:color="red">An error has occurred: {errorMessage}</p>
	{/if}
</form>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
	<p>Successfully submitted form data</p>
	<p>Title: {form.title}</p>
	<p>Content: {form.content}</p>
{/if}

<style>
	form {
		width: 60vw;
		border: 1px solid grey;
		border-radius: 1rem;
		box-shadow: 2px 2px 2px lightgrey, 4px 4px 4px grey;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		margin: 1rem auto 0 auto;
	}

	form > *:not(h1) {
		font-size: 1rem;
	}

	textarea {
		resize: none;
		height: 30vh;
		padding: 1rem;
		border-radius: 0.5rem;
		border-width: 2px;
	}

	input {
		padding: 1rem;
		border-radius: 0.5rem;
	}

	button {
		padding: 0.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
	}

	button:hover {
		background-color: #afafaf;
	}
</style>

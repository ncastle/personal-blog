<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	// import type { AuthSession } from '@supabase/supabase-js';
	import { page } from '$app/stores';
	import type { Post } from '$lib/types';

	let loading = false;
	let errorMessage: string;
	let posts = [];

	// let session = $page.data.session as AuthSession;
	// $: user = session?.user;

	onMount(() => {
		getPosts();
	});

	// get posts from supabase
	const getPosts = async () => {
		console.log('getPosts');
		try {
			loading = true;
			// const { user } = session;

			const { data, error } = await supabase
				.from('posts')
				.select('*')
				.order('id', { ascending: true });

			posts = data;
			console.log({ posts });
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

	async function deletePost(postId: string) {
		console.log(`deletePost(${postId})`);
		const { error } = await supabase.from('posts').delete().eq('id', postId);

		const newPosts = posts.filter((post) => post.id !== postId);
		posts = newPosts;

		if (error) {
			console.error(error.message);
			errorMessage = error.message;
		}
	}
</script>

<h1>All Blog Posts</h1>

<a href="blog/add">Add Post</a>

<h2>Posts from supabase:</h2>
<ul id="posts">
	{#if !!posts}
		{#each posts as post (post.id)}
			<li>
				<h3>{post.id}: {post.title}</h3>
				<button id="delete" on:click={deletePost(post.id)}>X</button>
			</li>
		{/each}
	{:else}
		<li>No posts or posts cannot be retrieved</li>
	{/if}
</ul>

<style>
	h1,
	h2 {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	#posts {
		list-style-type: none;
		margin-left: 1rem;
	}

	#posts li {
		display: flex;
		width: 25vw;
		border: 1px solid grey;
		border-radius: 0.5rem;
		padding: 0.5rem;
		margin: 0.25rem 0;
	}

	#delete {
		/* font-size: 1rem; */
		padding: 0.25rem;
		margin-left: auto;
	}
</style>

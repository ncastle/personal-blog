<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>All Blog Posts</h1>

<ul id="posts">
	{#each data.posts as post}
		<li><h2>{post.title}</h2></li>
	{/each}
</ul>

<a href="blog/add">Add Post</a>

<style>
	h1 {
		margin-bottom: 1rem;
	}

	#posts {
		list-style-type: none;
		margin-left: 1rem;
	}
</style>

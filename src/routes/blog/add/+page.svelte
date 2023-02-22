<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Add a post</h1>

<form method="POST">
	<label for="title">Title</label>
	<input class="input" type="text" name="title" id="title" />

	<label for="content">Content</label>
	<textarea class="input" name="content" id="content" />

	<button class="input">Submit</button>
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
	}

	form > * {
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
	}
</style>

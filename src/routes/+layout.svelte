<script>
	import Nav from '../components/Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		padding: 1rem;
	}
</style>

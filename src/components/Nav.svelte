<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/blog">Blog</a>
	<a href="/account">Account</a>
</nav>

<style>
	nav {
		height: 3rem;
		border-radius: 0.5rem;
		display: flex;
		gap: 1rem;
		margin: 0 1rem;
	}

	a {
		line-height: 3rem;
		height: inherit;
		padding: 0 1.5rem;
		flex: 1;
		display: inline-block;

		background-image: linear-gradient(to right, #006bb8, #0a99ff, #a3d9ff);
		background-size: 300% 100%;
		border-radius: 0.5rem;
		color: black;
		text-decoration: none;
		text-align: center;
		font-weight: bold;
		color: white;

		transition: all 0.5s ease;
	}

	a:visited {
		color: black;
		color: white;
	}

	a:hover {
		background-position: 100% 0;
		transition: all 0.5s ease;
		color: black;
	}
</style>

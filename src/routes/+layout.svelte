<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>

</nav>

<main>
  <slot></slot>
</main>


<style>

  main {
    padding: 1rem;
  }

  nav {
    margin-bottom: 1rem;
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

    background-image: linear-gradient(to right, #006BB8, #0A99FF, #A3D9FF );
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

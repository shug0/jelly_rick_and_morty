<template>
  <main class="PageWrapper About">
    <h1>About</h1>
    <p>
      This app was build with <a href="https://vuejs.org/">Vue.js</a> and the
      <a href="https://rickandmortyapi.com/">Rick & Morty API</a>
    </p>
    <p>
      Made with fun by
      <a href="https://thomas.alberola.me/">Thomas Alberola</a>.
    </p>
  </main>
</template>

<style lang="scss" scoped>
.About {
  @import "../theme/variable.scss";

  margin-top: 400px;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  ul li {
    padding-bottom: 0.5rem;
    list-style: disc inside;
  }

  a {
    color: $color-accent;
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>

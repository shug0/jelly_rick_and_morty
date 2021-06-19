<template>
  <div class="Navigation">
    <div class="PageWrapper Navigation_Wrapper">
      <h1><router-link to="/">Rick & Morty Characters</router-link></h1>
      <nav>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/theme/variable.scss";

.Navigation {
  position: relative;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;

  &::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: 300px;
    background-image: url("~@/assets/header.jpg");
    background-size: cover;
    background-position: center;
    z-index: -2;
  }

  &:after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    height: 300px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), $color-bg);
  }

  &_Wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & h1 {
    font-weight: 900;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    a {
      color: $color-text;
    }
  }

  & nav a {
    padding: 1rem;
    font-size: 1.25rem;
    color: black;
    font-weight: 900;
    position: relative;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

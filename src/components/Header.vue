<template>
  <div class="Navigation">
    <div class="PageWrapper Navigation_wrapper">
      <h1>
        <router-link to="/">
          <img height="32" src="@/assets/logo.png" alt="A blue alien smiling" />
          Rick & Morty Characters
        </router-link>
      </h1>
      <nav>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../theme/variable.scss";

.Navigation {
  position: relative;
  text-align: center;
  padding: 2rem 0;

  &::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: 450px;
    background-image: url("~@/assets/header.jpg");
    background-size: cover;
    background-position: bottom;
    z-index: -2;
  }

  &:after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    height: 100px;
    opacity: 0.8;
    background: linear-gradient($color-bg, rgba(0, 0, 0, 0));
  }

  &_wrapper {
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
      img {
        margin-right: 0.5rem;
      }
      display: flex;
      align-items: center;
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

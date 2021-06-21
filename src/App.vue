<template>
  <div id="app" class="wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },

  metaInfo: {
    title: "Rick & Morty Characters",
    titleTemplate: "%s",
  },
};
</script>

<style lang="scss">
@import "@/theme/variable.scss";

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: $color-text;
  background-color: $color-bg;
  a {
    color: $color-text_primary;
    text-decoration: none;
  }

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.PageWrapper {
  padding: 0 2rem;
  margin: auto;
  max-width: 1200px;
}

.Button {
  border: 0;
  min-width: 80px;
  padding: 0.5rem;
  color: $color-white;
  cursor: pointer;
  background-color: $color-bg_secondary;
  &:hover {
    background-color: $color-bg_tertiary;
  }
}
</style>

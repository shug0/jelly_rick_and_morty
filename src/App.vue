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
  },
};
</script>

<style lang="scss">
@import "./theme/variable.scss";

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
    text-decoration: none;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.PageWrapper {
  padding: 0 2rem;
  margin: auto;
  max-width: 1200px;
  margin-bottom: 3rem;
}

.Button {
  border: 0;
  min-width: 80px;
  padding: 0.5rem;
  color: $color-white;
  background-color: $color-bg_secondary;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:not(:disabled):hover {
    background-color: $color-bg_tertiary;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.Loading {
  position: absolute;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 300;
  color: $color-bg_disabled;

  .spinner {
    animation: linear spin 0.5s infinite;
    margin-right: 1rem;
  }
}
</style>

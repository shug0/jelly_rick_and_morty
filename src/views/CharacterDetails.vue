<template>
  <main class="PageWrapper Details">
    <router-link to="/characters">
      <button class="Button">Come back</button>
    </router-link>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "Detail | Rick & Morty Characters",
  },
};
</script>

<style lang="scss" scoped>
.Details {
  margin-top: 380px;
}
</style>

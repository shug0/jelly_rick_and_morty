<template>
  <main class="PageWrapper Details">
    <router-link to="/characters">
      <button class="Button">Come back</button>
    </router-link>
    <template v-if="soloCharacter">
      {{ soloCharacter.name }}
    </template>
  </main>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store";

export default {
  metaInfo: {
    title: "Detail | Rick & Morty Characters",
  },
  computed: mapState(["soloCharacter"]),
  beforeMount() {
    store.dispatch("resetCharacter");
  },
  mounted() {
    store.dispatch("getCharacter", this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.Details {
  margin-top: 380px;
}
</style>

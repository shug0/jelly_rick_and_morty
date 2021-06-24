<template>
  <main class="PageWrapper Details">
    <header class="Details_header">
      <router-link to="/characters">
        <button class="Button">
          <font-awesome-icon icon="chevron-left" /> Come back
        </button>
      </router-link>
    </header>

    <transition name="fade">
      <section class="row" v-if="soloCharacter">
        <div class="row">
          <img class="Avatar" :src="soloCharacter.image" alt="" />
          <div>
            <h1 class="Name">{{ soloCharacter.name }}</h1>
            <h3 class="Creation">
              Present in {{ soloCharacter.episode.length }} episode.s.
            </h3>
            <div class="row">
              <div class="column">
                <div class="Label">Status</div>
                <div class="Value">{{ soloCharacter.status }}</div>
              </div>
              <div class="column">
                <div class="Label">Gender</div>
                <div class="Value">{{ soloCharacter.gender }}</div>
              </div>
              <div class="column">
                <div class="Label">Species</div>
                <div class="Value">{{ soloCharacter.species }}</div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="Label">Origin</div>
                <div class="Value">{{ soloCharacter.origin.name }}</div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="Label">Location</div>
                <div class="Value">{{ soloCharacter.location.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </transition>
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
@import "../theme/variable.scss";

.Details {
  margin-top: 350px;

  .row {
    align-items: center;
    display: flex;
    width: 100%;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .column:not(:last-child) {
    margin-right: 3rem;
  }

  .Avatar {
    width: auto;
    height: 300px;
    margin-right: 3rem;
    border-radius: 50%;
  }

  .Creation {
    font-style: italic;
  }

  .Name {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .Label {
    color: $color-accent;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .Value {
    text-transform: capitalize;
    font-size: 1.5rem;
  }
}
</style>

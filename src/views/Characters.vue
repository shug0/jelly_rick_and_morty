<template>
  <main class="PageWrapper">
    <section class="Search">
      <SearchBar />
    </section>

    <section>
      <div class="Pagination" v-if="characters.length">
        <button
          class="Button Pagination_prev"
          :disabled="!charactersInfos.prev"
          @click="goPreviousPage"
        >
          <font-awesome-icon icon="chevron-left" />
          Previous
        </button>
        <div class="Pagination_info">Page {{ currentPage }}</div>
        <button
          class="Button Pagination_next"
          @click="goNextPage"
          :disabled="!charactersInfos.next"
        >
          Next
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>

      <transition-group
        name="fade"
        tag="ul"
        v-if="characters.length"
        class="Characters_list"
      >
        <li :key="character.id" v-for="character in characters">
          <Character :data="character" />
        </li>
      </transition-group>
      <div class="NoResult" v-else>
        <img
          src="@/assets/blue.png"
          alt="A funny face of blue alien smiling (Mr. Meeseeks)"
        />
        <div>There is nothing here.</div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchBar from "@/components/SearchBar";
import Character from "@/components/Character";

export default {
  name: "Characters",
  components: {
    SearchBar,
    Character,
  },
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  computed: mapState(["characters", "currentPage", "charactersInfos"]),
  methods: mapActions(["goNextPage", "goPreviousPage"]),
};
</script>

<style lang="scss" scoped>
@import "../theme/variable.scss";

.Search {
  margin-bottom: 200px;
}

.Pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  &_info {
    margin: 0 3rem;
  }
  &_prev svg {
    margin-right: 0.5rem;
  }
  &_next svg {
    margin-left: 0.5rem;
  }
}

.Characters_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.NoResult {
  font-weight: 100;
  font-size: 2.5rem;
  text-align: center;
  padding: 3rem;
}
</style>

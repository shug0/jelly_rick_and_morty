<template>
  <main class="PageWrapper">
    <section class="Search">
      <SearchBar />
    </section>

    <section class="Characters">
      <div class="Characters_Pagination">
        <button class="Button" v-if="currentPage" @click="goPreviousPage">
          Previous
        </button>
        <div class="Characters_Pagination_Info">Page {{ currentPage }}</div>
        <button class="Button" @click="goNextPage">Next</button>
      </div>

      <transition-group class="Characters_List" name="list" tag="p">
        <article :key="character.id" v-for="character in characters">
          <Character :data="character" />
        </article>
      </transition-group>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/theme/variable.scss";

.Search {
  margin-bottom: 300px;
}

.Characters {
  &_Pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    &_Info {
      margin: 0 2rem;
    }
  }

  &_List {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

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
  computed: mapState(["characters", "currentPage"]),
  methods: mapActions(["goNextPage", "goPreviousPage"]),
};
</script>

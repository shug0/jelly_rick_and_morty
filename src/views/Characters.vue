<template>
  <main class="PageWrapper">
    <SearchBar />
    <div v-for="character in characters" :key="character.id">
      {{ character.name }}
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { API_ROUTES_CHARACTERS } from "@/constants/api";
import SearchBar from "@/components/SearchBar";

export default {
  name: "Characters",
  components: {
    SearchBar,
  },
  data() {
    return {
      characters: null,
    };
  },
  mounted() {
    axios.get(API_ROUTES_CHARACTERS).then(({ data }) => {
      this.characters = data.results;
    });
  },
};
</script>

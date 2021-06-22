<template>
  <router-link :to="detailLink">
    <article class="Character">
      <img class="Character_image" :src="data.image" />
      <div class="Character_infos">
        <strike v-if="isDead">
          {{ data.name }}
        </strike>
        <span v-else>
          {{ data.name }}
        </span>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      detailLink: { name: "details", params: { id: this.data.id } },
      isDead: this.data.status === "Dead",
    };
  },
};
</script>

<style lang="scss">
@import "../theme/variable.scss";

.Character {
  margin: 1rem;
  color: $color-white;
  max-width: 200px;
  overflow: hidden;
  border-radius: 5px;
  background-color: $color-bg_secondary;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  &_image {
    display: block;
    max-width: 100%;
    height: auto;
  }

  &_infos {
    padding: 1rem;
    font-size: 1.3rem;
  }
}
</style>

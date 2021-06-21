<template>
  <article @click="viewDetail" class="Character">
    <img class="Character_Image" :src="data.image" />
    <div class="Character_Infos">
      <strike v-if="data.status === 'Dead'">
        {{ data.name }}
      </strike>
      <span v-else>
        {{ data.name }}
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    viewDetail() {
      this.$router.push(`/characters/${this.data.id}`);
    },
  },
};
</script>

<style lang="scss">
@import "@/theme/variable.scss";

.Character {
  color: white;
  max-width: 200px;
  overflow: hidden;
  border-radius: 5px;
  background-color: $color-bg_secondary;
  margin: 1rem;
  cursor: pointer;

  &_Image {
    display: block;
    max-width: 100%;
  }

  &_Infos {
    padding: 1rem;
    font-size: 1.3rem;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>

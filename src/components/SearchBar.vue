<template>
  <section class="SearchBar">
    <font-awesome-icon class="SearchBar_icon" icon="search" />
    <input
      class="SearchBar_input"
      placeholder="Search characters.."
      type="text"
    />
  </section>
</template>

<style lang="scss">
@import "@/theme/variable.scss";

.SearchBar {
  background-color: $color-white;
  height: 40px;
  max-width: 300px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  margin-top: 2rem;

  &_icon {
    position: absolute;
    color: $color-text_grey;
    top: 12px;
    left: 13px;
  }

  &_input {
    border: 0;
    padding: 10px;
    padding-left: 40px;
    height: 100%;
    width: 100%;
    font-size: 1rem;
  }
}
</style>

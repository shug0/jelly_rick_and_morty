<template>
  <section class="Search">
    <div class="SearchInput">
      <font-awesome-icon class="SearchInput_icon" icon="search" />
      <input
        name="name"
        class="SearchInput_input"
        placeholder="Search characters.."
        type="text"
        @change="filterResult"
      />
    </div>
    <div class="Filters">
      <span class="Filters_radio">
        <input type="radio" name="status" id="alive" @change="filterResult" />
        <label for="alive">
          <font-awesome-icon class="checked" icon="check-circle" />
          <font-awesome-icon class="waiting" icon="circle" />
          Alive</label
        >
      </span>
      <span class="Filters_radio">
        <input type="radio" name="status" id="dead" @change="filterResult" />
        <label for="dead">
          <font-awesome-icon class="checked" icon="check-circle" />
          <font-awesome-icon class="waiting" icon="circle" />
          Dead</label
        >
      </span>
      <span class="Filters_radio">
        <input type="radio" name="status" id="unknown" @change="filterResult" />
        <label for="unknown">
          <font-awesome-icon class="checked" icon="check-circle" />
          <font-awesome-icon class="waiting" icon="circle" />
          Unknown</label
        >
      </span>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  methods: mapActions(["filterResult"]),
};
</script>

<style lang="scss" scoped>
@import "../theme/variable.scss";

.Search {
  margin: 4rem auto 0;
  max-width: 300px;
  border-radius: 7px;
  overflow: hidden;
  background-color: $color-bg_secondary;
}

.SearchInput {
  background-color: $color-white;
  height: 40px;
  position: relative;

  &_icon {
    position: absolute;
    color: $color-text_grey;
    top: 12px;
    left: 13px;
  }

  &_input {
    border: 0;
    padding: 10px 10px 10px 40px;
    height: 100%;
    width: 100%;
    font-size: 1rem;
  }
}

.Filters {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &_radio {
    display: flex;
    align-items: center;
    border-radius: 7px;
  }

  label {
    cursor: pointer;
    padding: 0.5rem;
  }

  input[type="radio"] {
    visibility: hidden;
    margin: 0;
    width: 0;
    & + label svg {
      margin: 0;
      width: 0;
      visibility: hidden;
      &.checked {
        color: $color-accent;
      }
      &.waiting {
        width: auto;
        visibility: visible;
        color: $color-white;
      }
    }
    &:checked + label svg {
      &.checked {
        width: auto;
        visibility: visible;
      }
      &.waiting {
        width: 0;
        visibility: hidden;
      }
    }
  }
}
</style>

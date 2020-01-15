<template>
  <div class="searchbar-wrapper w-100 p-3 px-3 ">
    <form
      @submit.prevent="search"
      class="d-flex justify-content-center align-items-center"
      :class="{ 'has-content': widget }"
    >
      <input
        type="text"
        class="p-2 search-box w-100"
        name="widget"
        v-model.trim="widget"
        placeholder="Search Widgets..."
        @keyup="search"
      />
      <button class="m-0 p-0">
        <img src="@/assets/icons/search-icon.svg" class="m-0 p-2" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      widget: ""
    };
  },
  methods: {
    ...mapActions(["fetchWidgets"]),
    search() {
      this.fetchWidgets(this.widget);
    }
  }
};
</script>

<style lang="scss" scoped>
.searchbar-wrapper {
  input {
    background: #f9f9f9;
    border: none;
  }
  button {
    background: #f9f9f9;
    border: none;
  }
  form {
    &.has-content {
      border: 3px solid #17a2b8;
    }
  }
}
</style>

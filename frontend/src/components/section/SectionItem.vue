<template>
  <div class="section-item">
    <div class="section-options d-flex justify-content-end mr-1">
      <button class="btn text-light p-1 mr-1 border">
        <img src="@/assets/icons/add-icon.svg" />
      </button>
      <button
        class="btn text-light  p-1 mr-1 border"
        @click="deleteSection(section.id)"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <div class="rounded item-content">
      <h1>Sections {{ section.id }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    section: Object
  },
  methods: {
    ...mapActions(["deleteSection"])
  }
};
</script>

<style lang="scss" scoped>
.section-item {
  .section-options {
    visibility: hidden;
    button {
      height: 0;
      width: 0;
      transition: 0.5s;
      background: #b5b5b5;
      img {
        height: 0;
        width: 0;
        transition: 0.5s;
      }
    }
  }
  .item-content {
    border: 3px solid #b5b5b5;
  }
  &:hover {
    .section-options {
      visibility: visible;
      button {
        height: 35px;
        width: 35px;
        transition: 0.5s;
        background: #17a2b8;
        img {
          height: 18px;
          width: 18px;
          transition: 0.5s;
        }
      }
    }
    .item-content {
      border-color: #17a2b8;
    }
  }
}
</style>

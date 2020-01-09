<template>
  <div class="section-item">
    <div class="section-options d-flex justify-content-center mr-1">
      <button
        class="btn text-light p-1 border section-handle"
        v-b-tooltip.hover
        title="Drag & Drop"
      >
        <img src="@/assets/icons/handler-icon.svg" />
      </button>
      <button
        class="btn text-light p-1 border"
        v-b-tooltip.hover
        title="Add Column"
      >
        <img src="@/assets/icons/add-icon.svg" />
      </button>
      <button
        class="btn text-light  p-1 border"
        @click="deleteSection(section.id)"
        v-b-tooltip.hover
        title="Remove Section"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <div class="rounded item-content">
      <RowList :rows="section.rows" />
    </div>
  </div>
</template>

<script>
import RowList from "@/components/row/RowList.vue";
import { mapActions } from "vuex";
export default {
  components: {
    RowList
  },
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
      &.section-handle {
        cursor: grab;
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

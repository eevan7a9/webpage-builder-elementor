<template>
  <div class="column-item">
    <div class="column-options d-flex justify-content-center mr-1">
      <button class="btn text-light p-1 border column-handle">
        <img src="@/assets/icons/handler-icon.svg" />
      </button>
      <!-- <button
        class="btn text-light p-1 pb-2 border"
        v-b-tooltip.hover
        title="Add Row"
        @click="addRow(section.id)"
      >
        <img src="@/assets/icons/add-icon.svg" />
      </button> -->
      <button
        class="btn text-light  p-1 pb-2 border remove"
        @click="removeColumn"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <div class="item-content">
      <h1>{{ column.elements.length }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    column: Object,
    rowId: Number,
    sectionId: Number
  },
  methods: {
    ...mapActions(["deleteColumnContent"]),
    removeColumn() {
      this.deleteColumnContent({
        columnId: this.column.id,
        rowId: this.rowId,
        sectionId: this.sectionId
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.column-item {
  .column-options {
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
    border: 2px dotted #b5b5b5;
  }
  &:hover {
    .column-options {
      visibility: visible;
      button {
        height: 33px;
        width: 38px;
        transition: 0.5s;
        background: #17a2b8;
        img {
          height: 16px;
          width: 16px;
          transition: 0.5s;
        }
        &.add:hover {
          background: #28a745;
        }
        &.remove:hover {
          background: #dc3545;
        }
        &.column-handle:hover {
          cursor: grab;
          background: #007bff;
        }
      }
    }
    .item-content {
      border: 3px dotted #17a2b8;
    }
  }
}
</style>

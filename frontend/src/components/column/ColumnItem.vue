<template>
  <div class="column-item">
    <div class="item-content">
      <div class="column-options d-flex justify-content-left mr-1">
        <button
          class="btn text-light p-1 border column-handle d-flex justify-content-center align-items-center"
          v-b-tooltip.hover
          title="Move Column"
        >
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
          class="btn text-light  p-1 border remove d-flex justify-content-center align-items-center"
          @click="removeColumn"
          v-b-tooltip.hover
          title="Delete"
        >
          <img src="@/assets/icons/trash-icon.svg" />
        </button>
      </div>
      <h1 v-if="column.elements.length">{{ column.elements.length }}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="m-4"
        v-else
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
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
    position: absolute;
    visibility: hidden;
    button {
      height: 0;
      width: 0;
      transition: 0.5s;

      img {
        height: 0;
        width: 0;
        transition: 0.5s;
      }
    }
  }
  .item-content {
    border: 2px dotted #b5b5b5;
    cursor: pointer;
    svg {
      color: #b5b5b5;
    }
  }
  &:hover {
    .column-options {
      visibility: visible;
      button {
        height: 28px;
        width: 31px;
        transition: 0.5s;
        background: #474b4e;
        border: none;
        img {
          height: 13px;
          width: 13px;
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
          background: #17a2b8;
        }
      }
    }
    .item-content {
      border: 3px dotted #17a2b8;
      svg {
        color: #17a2b8;
      }
    }
  }
}
</style>

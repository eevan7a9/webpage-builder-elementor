<template>
  <div class="column-item">
    <div class="row-options d-flex justify-content-center mr-1">
      <button class="btn text-light p-1 pb-2 border section-handle">
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
        @click="deleteSection(section.id)"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <!-- <img src="@/assets/icons/add-square-icon.svg" /> -->
    <div class="item-content  p-4">
      <h1 class="text-primary">content</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.column-item {
  .row-options {
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
    border: 2px dashed #b5b5b5;
  }
  &:hover {
    .row-options {
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
        &.section-handle:hover {
          cursor: grab;
          background: #007bff;
        }
      }
    }
    .item-content {
      border-style: solid;
      border-color: #17a2b8;
    }
  }
}
</style>

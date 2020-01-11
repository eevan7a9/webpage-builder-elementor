<template>
  <div class="row-item">
    <div
      class="row-options d-flex justify-content-center mr-1"
      v-if="row.columns.length"
    >
      <button class="btn text-light p-1 pb-2 border row-handle">
        <img src="@/assets/icons/handler-icon.svg" />
      </button>
      <button class="btn text-light p-1 pb-2 border add" @click="newColumn">
        <img src="@/assets/icons/add-icon.svg" />
      </button>
      <button
        class="btn text-light  p-1 pb-2 border remove"
        @click="deleteRow({ rowId: row.id, sectionId: sectionId })"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <!-- <img src="@/assets/icons/add-square-icon.svg" /> -->
    <div class="p-1 pb-2" :class="{ 'item-content': row.columns.length }">
      <ColumnList
        :columns="row.columns"
        :rowLayout="row.layout"
        :rowId="row.id"
        :sectionId="sectionId"
        v-if="row.columns.length"
      />
      <div v-else>
        <ColumnLayout :rowId="row.id" :sectionId="sectionId" />
      </div>
    </div>
  </div>
</template>

<script>
import ColumnList from "@/components/column/ColumnList.vue";
import ColumnLayout from "@/components/column/ColumnLayout.vue";
import { toTimestamp } from "@/assets/scripts/evan-custom.js";
import { mapActions } from "vuex";
export default {
  components: {
    ColumnList,
    ColumnLayout
  },
  props: {
    row: Object,
    sectionId: Number
  },
  methods: {
    ...mapActions(["deleteRow", "addColumn"]),
    newColumn() {
      if (this.row.layout || this.row.columns.length >= 12) {
        this.$swal.fire({
          icon: "error",
          title: "Max Column Exceeded",
          text: "This Layout reached maximum number of columns"
          // footer: "<a href>Why do I have this issue?</a>"
        });
      } else {
        const newColumn = {
          id: toTimestamp(new Date()) + this.row.columns.length,
          grid: null,
          elements: []
        };
        this.addColumn({
          column: newColumn,
          rowId: this.row.id,
          sectionId: this.sectionId
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.row-item {
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
        height: 31px;
        width: 33px;
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
        &.row-handle:hover {
          cursor: grab;
          background: #007bff;
        }
      }
    }
    .item-content {
      border: 3px dashed #17a2b8;
    }
  }
}
</style>

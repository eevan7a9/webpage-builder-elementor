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
        class="btn text-light p-1 border add"
        v-b-tooltip.hover
        title="Add Column"
        @click="newColumn"
      >
        <img src="@/assets/icons/add-icon.svg" />
      </button>
      <button
        class="btn text-light  p-1 border remove"
        @click="deleteSection(section.id)"
        v-b-tooltip.hover
        title="Remove Section"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <div class="rounded item-content p-1 pb-3">
      <ColumnList
        :columns="section.columns"
        :sectionLayout="section.layout"
        :sectionId="section.id"
        v-if="section.columns.length"
      />
      <div v-else>
        <ColumnLayout :sectionId="section.id" />
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
    section: Object
  },
  methods: {
    ...mapActions(["deleteSection", "addColumn"]),
    newColumn() {
      if (this.section.layout || this.section.columns.length >= 12) {
        this.$swal.fire({
          icon: "error",
          title: "Max Column Exceeded",
          text: "This Layout reached maximum number of columns"
          // footer: "<a href>Why do I have this issue?</a>"
        });
      } else {
        const newColumn = {
          id: toTimestamp(new Date()) + this.section.columns.length,
          grid: null,
          style: {
            fill: true,
            y: "center",
            x: "center",
            background: "none",
            padding: "0"
          },
          elements: []
        };
        this.addColumn({
          column: newColumn,
          sectionId: this.section.id
        });
      }
    }
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
    border: 2px solid #b5b5b5;
  }
  &:hover {
    .section-options {
      visibility: visible;
      button {
        height: 35px;
        width: 35px;
        transition: 0.5s;
        background: #17a2b8;
        border-color: #17a2b8;
        border-radius: 0;
        img {
          height: 18px;
          width: 18px;
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
      border-color: #17a2b8;
    }
  }
}
</style>

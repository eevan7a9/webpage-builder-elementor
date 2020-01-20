<template>
  <div class="column-item h-100 d-flex flex-column justify-content-center">
    <div class="column-options d-flex justify-content-left">
      <button
        class="btn text-light p-1 border column-handle d-flex justify-content-center align-items-center"
        v-b-tooltip.hover
        title="Move Column"
      >
        <img src="@/assets/icons/handler-icon.svg" />
      </button>
      <button
        class="btn text-light p-1 border d-flex justify-content-center align-items-center"
        v-b-tooltip.hover
        title="Settings"
        @click="showSettings"
      >
        <img src="@/assets/icons/settings-icon.svg" />
      </button>
      <button
        class="btn text-light  p-1 border remove d-flex justify-content-center align-items-center"
        @click="removeColumn"
        v-b-tooltip.hover
        title="Delete"
      >
        <img src="@/assets/icons/trash-icon.svg" />
      </button>
    </div>
    <div class="item-content h-100" :style="getStyle">
      <ElementList :column="column" :sectionId="sectionId" />
    </div>
  </div>
</template>

<script>
import ElementList from "@/components/element/ElementList.vue";
import { mapActions } from "vuex";
export default {
  components: {
    ElementList
  },
  props: {
    column: Object,
    sectionId: Number
  },
  computed: {
    getStyle: function() {
      return {
        padding: this.column.style.padding + "px"
      };
    }
  },
  methods: {
    ...mapActions(["deleteColumnContent", "selectColumn", "toggleSidebarTab"]),
    removeColumn() {
      this.deleteColumnContent({
        columnId: this.column.id,
        sectionId: this.sectionId
      });
    },
    showSettings() {
      this.selectColumn(this.column);
      this.toggleSidebarTab("settings");
    }
  }
};
</script>

<style lang="scss" scoped>
.column-item {
  .column-options {
    position: relative;
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
    }
  }
}
</style>

<template>
  <div class="element-wrapper h-100">
    <draggable v-model="myElements" v-bind="dragOptions" class="h-100">
      <transition-group type="transition" name="flip-list">
        <div v-for="element in myElements" :key="element.id" class="w-100 p-1">
          {{ element }} ,{{ columnId }} {{ rowId }} {{ sectionId }}
        </div>
        <div
          class="empty w-100 p-1 h-100 d-flex justify-content-center align-items-center"
          :key="1"
          v-if="myElements.length < 1"
        >
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
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  props: {
    elements: Array,
    columnId: Number,
    rowId: Number,
    sectionId: Number
  },
  computed: {
    myElements: {
      get() {
        return this.elements;
      },
      set(value) {
        const element = {
          elements: value,
          columnId: this.columnId,
          rowId: this.rowId,
          sectionId: this.sectionId
        };
        this.$store.dispatch("updateElements", element);
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: "group-elements",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.element-wrapper {
  .empty {
    cursor: pointer;
    svg {
      color: #b5b5b5;
    }
  }
  &:hover {
    svg {
      color: #17a2b8;
    }
  }
}
</style>

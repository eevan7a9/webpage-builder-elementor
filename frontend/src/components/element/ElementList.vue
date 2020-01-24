<template>
  <div class="element-wrapper h-100" @click="selectElList">
    <draggable
      v-model="myElements"
      v-bind="dragOptions"
      class="h-100 d-flex"
      :class="`justify-content-${column.style.x} align-items-${column.style.y}`"
    >
      <transition-group
        type="transition"
        name="flip-list"
        class="w-100"
        :class="{ ' h-100': myElements.length < 1 }"
      >
        <div v-for="element in myElements" :key="element.id" class="w-100">
          <ElementItem
            :element="element"
            :column="column"
            :sectionId="sectionId"
          />
        </div>
        <div
          class="empty w-100 h-100 d-flex justify-content-center align-items-center"
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
import ElementItem from "@/components/element/ElementItem.vue";
import draggable from "vuedraggable";
import { mapActions } from "vuex";
export default {
  components: {
    draggable,
    ElementItem
  },
  props: {
    column: Object,
    sectionId: Number
  },
  computed: {
    myElements: {
      get() {
        return this.column.elements;
      },
      set(value) {
        const element = {
          // we create new instance of the array from value
          elements: JSON.parse(JSON.stringify(value)),
          columnId: this.column.id,
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
  },
  methods: {
    ...mapActions(["selectWidget", "toggleSidebarTab"]),
    selectElList() {
      this.selectWidget({});
      this.toggleSidebarTab("elements");
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

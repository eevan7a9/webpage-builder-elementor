<template>
  <div
    class="element-item-wrapper"
    @mouseleave="showOptions = false"
    @click="selected"
  >
    <div
      class="widget-wrapper"
      :class="{ selected: getSettings.widget.id == element.id }"
    >
      <div class="widget-options p-0 m-0 justify-content-end w-100">
        <button
          class="text-light p-1 border column-handle d-flex justify-content-center align-items-center"
          v-b-tooltip.hover
          title="Move Widget"
          v-if="showOptions"
        >
          <img src="@/assets/icons/handler-icon.svg" />
        </button>
        <button
          class="text-light  p-1 border remove d-flex justify-content-center align-items-center"
          v-b-tooltip.hover
          title="Delete Widget"
          v-if="showOptions"
          @click="remove"
        >
          <img src="@/assets/icons/trash-icon.svg" />
        </button>
        <button
          class="text-light  p-1 border more d-flex justify-content-center align-items-center mr-1"
          v-b-tooltip.hover
          title="Show Options"
          @click="showOptions = !showOptions"
        >
          <img src="@/assets/icons/more-vertical-icon.svg" />
        </button>
      </div>
      <component
        :is="selectedComponent"
        :content="element.content"
        :elementId="element.id"
        :columnId="column.id"
        :sectionId="sectionId"
      />
    </div>
  </div>
</template>

<script>
import HeadingWidget from "@/components/widgets/HeadingWidget.vue";
import TextWidget from "@/components/widgets/TextWidget.vue";
import ListWidget from "@/components/widgets/ListWidget.vue";
import ButtonWidget from "@/components/widgets/ButtonWidget.vue";
import SpacerWidget from "@/components/widgets/SpacerWidget.vue";
import ImageWidget from "@/components/widgets/ImageWidget.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    HeadingWidget,
    TextWidget,
    ListWidget,
    ButtonWidget,
    SpacerWidget,
    ImageWidget
  },
  data() {
    return {
      selectedComponent: "TextWidget",
      showOptions: false
    };
  },
  props: {
    element: Object,
    column: Object,
    sectionId: Number
  },
  computed: {
    ...mapGetters(["getSettings"])
  },
  methods: {
    ...mapActions(["deleteElements", "selectWidget", "toggleSidebarTab"]),
    remove() {
      this.deleteElements({
        elementId: this.element.id,
        columnId: this.column.id,
        sectionId: this.sectionId
      });
    },
    selected() {
      event.stopPropagation();
      this.selectWidget({
        widget: this.element,
        column: this.column
      });
      this.toggleSidebarTab("settings");
    }
  },
  created() {
    this.selectedComponent = this.element.widget;
  }
};
</script>

<style lang="scss" scoped>
.element-item-wrapper {
  position: relative;
  .widget-options {
    position: relative;
    display: none;
    button {
      height: 0;
      width: 0;
      border: none !important;

      &.more {
        background: #333;
      }
      img {
        height: 0;
        width: 0;
      }
    }
  }
  .widget-wrapper {
    border: 1px dotted #b5b5b5;
    &.selected {
      border: 3px solid #17a2b8;
    }
  }
  &:hover {
    .widget-options {
      position: absolute;
      display: flex;
      button {
        position: relative;
        height: 28px;
        width: 31px;

        background: #17a2b8;
        border: none;
        img {
          height: 13px;
          width: 13px;
        }
        &.add:hover {
          background: #28a745;
        }
        &.remove:hover {
          background: #dc3545;
        }
        &.more:hover {
          background: #17a2b8;
        }
        &.column-handle:hover {
          cursor: grab;
          background: #17a2b8;
        }
      }
    }
    .widget-wrapper {
      border: 1px dotted #17a2b8;
      &.selected {
        border: 3px solid #17a2b8;
      }
    }
  }
}
</style>

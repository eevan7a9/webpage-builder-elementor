<template>
  <div class="element-wrapper ">
    <draggable v-model="myElements" v-bind="dragOptions">
      <transition-group type="transition" name="flip-list">
        <div v-for="element in myElements" :key="element.id" class="w-100 p-1">
          {{ element }} ,{{ columnId }} {{ rowId }} {{ sectionId }}
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

<style lang="scss" scoped></style>

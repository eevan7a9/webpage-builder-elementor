<template>
  <div class="columns-wrapper ">
    <!-- <div v-for="column in myColumns" :key="column.id" class="w-100 p-1">
      <ColumnItem :column="column" :rowId="rowId" :sectionId="sectionId" />
    </div> -->
    <draggable v-model="myColumns" v-bind="dragOptions" handle=".column-handle">
      <transition-group
        type="transition"
        name="flip-list"
        class="d-flex justify-content-around"
      >
        <div v-for="column in myColumns" :key="column.id" class="w-100 p-1">
          <ColumnItem :column="column" :rowId="rowId" :sectionId="sectionId" />
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import ColumnItem from "@/components/column/ColumnItem.vue";
import draggable from "vuedraggable";
export default {
  components: {
    ColumnItem,
    draggable
  },
  props: {
    columns: Array,
    rowId: Number,
    sectionId: Number
  },
  computed: {
    myColumns: {
      get() {
        return this.columns;
      },
      set(value) {
        // this.$store.commit("setColumns", value);
        this.$store.dispatch("updateColumns", {
          column: value,
          rowId: this.rowId,
          sectionId: this.sectionId
        });
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: "group-columns",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

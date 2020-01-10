<template>
  <div class="rows-wrapper d-flex  flex-column">
    <!-- <div v-for="row in rows" :key="row.id" class="w-100 p-3">
      <RowItem />
    </div> -->
    <draggable v-model="myRows" v-bind="dragOptions" handle=".section-handle">
      <transition-group type="transition" name="flip-list">
        <div v-for="row in myRows" :key="row.id" class="w-100 p-1">
          <RowItem :row="row" :sectionId="sectionId" />
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import RowItem from "@/components/row/RowItem.vue";
export default {
  props: {
    rows: Array,
    sectionId: Number
  },
  components: {
    RowItem,
    draggable
  },
  computed: {
    myRows: {
      get() {
        return this.rows;
      },
      set(value) {
        // this.$store.commit("setColumns", value);
        this.$store.dispatch("updateRow", {
          rows: value,
          sectionId: this.sectionId
        });
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: "group-rows",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

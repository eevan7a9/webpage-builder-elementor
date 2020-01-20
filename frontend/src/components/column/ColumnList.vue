<template>
  <div class="columns-wrapper ">
    <draggable v-model="myColumns" v-bind="dragOptions" handle=".column-handle">
      <transition-group
        type="transition"
        name="flip-list"
        :class="sectionLayout ? 'row m-auto' : 'd-md-flex'"
      >
        <div
          v-for="column in myColumns"
          :key="column.id"
          :class="sectionLayout ? column.grid : ''"
          :style="getStyle(column.style)"
        >
          <ColumnItem :column="column" :sectionId="sectionId" />
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
    sectionLayout: Boolean,
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
          sectionId: this.sectionId
        });
      }
    },
    dragOptions() {
      return {
        animation: 0,
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    getStyle(style) {
      let width = style.fill ? "100%" : "auto";
      return {
        width: width,
        background: style.background,
        padding: style.padding + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  align-items: flex-start;
}
</style>

<template>
  <div class="layouts-wrapper p-3">
    <div class="text-center">
      <h4 style="font-family: 'Anton', sans-serif">Choose Layout</h4>
    </div>
    <div class="choice-wrapper row">
      <div class="item-wrapper col-md-3" @click="selectSet(autoAdjust)">
        <p class="m-0 p-0">Dynamic Layout</p>
        <span>1 to 12</span>
        <div class="choice-item item-1">
          <div class="item question-mark font-weight-bold">
            <h3>?</h3>
          </div>
        </div>
      </div>
      <div
        class="item-wrapper col-md-3"
        v-for="(layout, index) in getLayouts"
        :key="index"
        @click="selectSet(layout)"
      >
        <p class="m-0 p-0">Layout</p>
        <span>{{ layout.label }}</span>
        <div :class="`choice-item item-${index + 2}`">
          <div
            class="item"
            v-for="(column, index) in layout.columns"
            :key="index"
          >
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { toTimestamp } from "@/assets/scripts/evan-custom.js";
export default {
  props: {
    sectionId: Number
  },
  computed: {
    ...mapGetters(["getLayouts"])
  },
  data() {
    return {
      autoAdjust: {
        label: "1 to 12",
        layout: false,
        columns: [
          {
            id: toTimestamp(new Date()),
            grid: null,
            style: {
              fill: true,
              y: "start",
              x: "center",
              background: "none",
              padding: "0"
            },
            elements: []
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["addSectionColumns"]),
    selectSet(set) {
      const layout = JSON.parse(JSON.stringify(set));
      this.addSectionColumns({ layout: layout, sectionId: this.sectionId });
    }
  }
};
</script>

<style lang="scss" scoped>
.layouts-wrapper {
  background: #e7e9ed;
  border: solid 2px #2488e6;
  border-radius: 5px;
}
.choice-wrapper {
  .item-wrapper {
    .choice-item {
      display: grid;
      grid-column-gap: 1px;
      grid-template-rows: 100px;
      div {
        background: #9fa0a1;
        border-radius: 5px;
        border: 1.5px solid #534d50;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
      }
      &.item-1 {
        grid-template-columns: repeat(1, 1fr);
        font-size: 20px;
      }
      &.item-2 {
        grid-template-columns: repeat(2, 1fr);
      }
      &.item-3 {
        grid-template-columns: 35% 1fr;
      }
      &.item-4 {
        grid-template-columns: 20% 1fr;
      }
      &.item-5 {
        grid-template-columns: 20% 1fr 20%;
      }
      &.item-6 {
        grid-template-columns: 16.7% 33% 1fr;
      }
      &.item-7 {
        grid-template-columns: 14% 1fr 1fr;
      }
      &.item-8 {
        grid-template-columns: 20% 20% 20% 1fr;
      }
    }
    &.item-wrapper:hover {
      .choice-item {
        div {
          background: #e7e9ed;
          border: 1px solid #b7084e;
          color: #b7084e;
          font-weight: bold;
          transition: 0.5s;
        }
        &.item-1 {
          .question-mark {
            border: 1px solid #2488e6;
            color: #2488e6;
          }
        }
      }
    }
  }
}
</style>

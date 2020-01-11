<template>
  <div>
    <div class="text-center">
      <h4 style="font-family: 'Anton', sans-serif">Choose Layout</h4>
    </div>
    <div class="choice-wrapper row">
      <div class="item-wrapper col-md-3" @click="selectSet(autoAdjust)">
        <p class="m-0 p-0">Auto Adjust</p>
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
export default {
  props: {
    rowId: Number,
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
            id: 1,
            grid: null,
            elements: []
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["addRowColumns"]),
    selectSet(set) {
      set.id = this.rowId;
      this.addRowColumns({
        row: set,
        sectionId: this.sectionId
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
          border: 2px solid #b7084e;
          color: #b7084e;
          font-weight: bold;
          transition: 0.5s;
        }
        &.item-1 {
          .question-mark {
            border: 3px solid #2488e6;
            color: #2488e6;
          }
        }
      }
    }
  }
}
</style>

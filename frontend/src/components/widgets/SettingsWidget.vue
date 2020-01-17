<template>
  <div class="settings-widget-wrapper">
    <!-- {{ fontSize }}, {{ padding }}, {{ margin }}, {{ fontColor }} -->
    <div class="card p-2 pt-2">
      <div class="form-group" v-if="widgets.content.text">
        <label for="text" class="ml-1 w-100 text-left font-weight-bold"
          >Text</label
        >
        <textarea
          class="form-control"
          name="text"
          id="text"
          rows="2"
          v-model="widgets.content.text"
        ></textarea>
        <hr />
      </div>
      <!-- FontSize Padding Margin -->
      <RangeNumber
        :value="parseInt(widgets.content.style.fontSize)"
        label="Font Size"
        @valueChange="e => (widgets.content.style.fontSize = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.content.style.fontSize"
      />
      <RangeNumber
        :value="parseInt(widgets.content.style.fontWeight)"
        label="Font Weight"
        @valueChange="e => (widgets.content.style.fontWeight = e)"
        min="100"
        max="900"
        step="100"
        v-if="widgets.content.style.fontWeight"
      />
      <RangeNumber
        :value="parseInt(widgets.content.style.padding)"
        label="Padding"
        @valueChange="e => (widgets.content.style.padding = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.content.style.padding"
      />
      <RangeNumber
        :value="parseInt(widgets.content.style.margin)"
        label="Margin"
        @valueChange="e => (widgets.content.style.margin = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.content.style.margin"
      />
      <RangeNumber
        :value="parseInt(widgets.content.style.borderRadius)"
        label="Border Radius"
        @valueChange="e => (widgets.content.style.borderRadius = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.content.style.borderRadius"
      />
      <RangeNumber
        :value="parseInt(widgets.content.style.height)"
        label="height"
        @valueChange="e => (widgets.content.style.height = e)"
        min="50"
        max="500"
        step="0"
        v-if="widgets.content.style.height"
      />
      <hr />
      <ColorPicker
        :colorFor="widgets.content.style.color"
        label="Font"
        @colorChange="fontColor"
        v-if="widgets.content.style.color"
      />
      <ColorPicker
        :colorFor="widgets.content.style.background"
        label="Background"
        @colorChange="backgroundColor"
        v-if="widgets.content.style.background"
      />
    </div>
  </div>
</template>

<script>
import RangeNumber from "@/components/utility/RangeNumber.vue";
import ColorPicker from "@/components/utility/ColorPicker.vue";
export default {
  components: {
    ColorPicker,
    RangeNumber
  },
  props: {
    widgets: Object
  },
  methods: {
    fontColor(e) {
      this.widgets.content.style.color = e
        ? e
        : this.widgets.content.style.color;
    },
    backgroundColor(e) {
      this.widgets.content.style.background = e
        ? e
        : this.widgets.content.style.background;
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-widget-wrapper {
  padding: 10px;
  margin-bottom: 170px;
}
.color-picker {
  height: 300px;
}
</style>

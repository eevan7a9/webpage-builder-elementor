<template>
  <div class="settings-widget-wrapper">
    <!-- {{ fontSize }}, {{ padding }}, {{ margin }}, {{ fontColor }} -->
    <div class="card p-2 pt-2">
      <div class="form-group">
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
      </div>
      <hr />
      <!-- FontSize Padding Margin -->
      <RangeNumber
        :value="fontSize"
        label="Font Size"
        @valueChange="e => (fontSize = parseInt(e))"
      />
      <RangeNumber
        :value="padding"
        label="Padding"
        @valueChange="e => (padding = parseInt(e))"
      />
      <RangeNumber
        :value="margin"
        label="Margin"
        @valueChange="e => (margin = parseInt(e))"
      />
      <RangeNumber
        :value="margin"
        label="Margin"
        @valueChange="e => (margin = parseInt(e))"
      />
      <ColorPicker
        :colorFor="fontColor"
        label="Font"
        @colorChange="e => (fontColor = e)"
      />
      <ColorPicker
        :colorFor="backgroundColor"
        label="Background"
        @colorChange="e => (backgroundColor = e)"
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
  data() {
    return {
      fontColor: "333",
      backgroundColor: "fff",
      dd: "32",
      fontSize: 20,
      padding: 5,
      margin: 5
    };
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

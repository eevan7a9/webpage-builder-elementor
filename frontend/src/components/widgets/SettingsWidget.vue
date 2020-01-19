<template>
  <div class="settings-widget-wrapper">
    <!-- {{ fontSize }}, {{ padding }}, {{ margin }}, {{ fontColor }} -->
    <div class="card p-2 pt-2">
      <TextInput
        :text="widgets.text"
        label="Text"
        @textChange="e => (widgets.text = e)"
        v-if="widgets.hasOwnProperty('text')"
      />
      <ListText :lists="widgets.list" v-if="widgets.hasOwnProperty('list')" />
      <UploadImage
        @fileUploaded="e => (widgets.src = e)"
        v-if="widgets.hasOwnProperty('src')"
        :imageSrc="widgets.src"
      />
      <!-- FontSize Padding Margin -->
      <RangeNumber
        :value="parseInt(widgets.style.fontSize)"
        label="Font Size"
        @valueChange="e => (widgets.style.fontSize = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.style.fontSize"
      />
      <RangeNumber
        :value="parseInt(widgets.style.fontWeight)"
        label="Font Weight"
        @valueChange="e => (widgets.style.fontWeight = e)"
        min="100"
        max="900"
        step="100"
        v-if="widgets.style.fontWeight"
      />
      <RangeNumber
        :value="parseInt(widgets.style.padding)"
        label="Padding"
        @valueChange="e => (widgets.style.padding = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.style.padding"
      />
      <RangeNumber
        :value="parseInt(widgets.style.margin)"
        label="Margin"
        @valueChange="e => (widgets.style.margin = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.style.margin"
      />
      <RangeNumber
        :value="parseInt(widgets.style.borderRadius)"
        label="Border Radius"
        @valueChange="e => (widgets.style.borderRadius = e)"
        min="0"
        max="200"
        step="0"
        v-if="widgets.style.borderRadius"
      />
      <RangeNumber
        :value="parseInt(widgets.style.height.match(/(\d+)/))"
        label="height"
        @valueChange="e => (widgets.style.height = e + 'px')"
        min="50"
        max="500"
        step="0"
        v-if="widgets.style.height"
      />
      <RangeNumber
        :value="parseInt(widgets.style.width.match(/(\d+)/))"
        :label="widgets.style.width && widgets.style.height ? 'Width' : 'Size'"
        @valueChange="e => (widgets.style.width = e + 'px')"
        min="50"
        max="500"
        step="0"
        v-if="widgets.style.width"
      />
      <hr />
      <ColorPicker
        :colorFor="widgets.style.color"
        label="Font"
        @colorChange="fontColor"
        v-if="widgets.style.color"
      />
      <ColorPicker
        :colorFor="widgets.style.background"
        label="Background"
        @colorChange="backgroundColor"
        v-if="widgets.style.background"
      />
    </div>
  </div>
</template>

<script>
import RangeNumber from "@/components/utility/RangeNumber.vue";
import ColorPicker from "@/components/utility/ColorPicker.vue";
import UploadImage from "@/components/utility/UploadImage.vue";
import TextInput from "@/components/utility/TextInput.vue";
import ListText from "@/components/utility/ListText.vue";
export default {
  components: {
    ColorPicker,
    RangeNumber,
    UploadImage,
    TextInput,
    ListText
  },
  props: {
    widgets: Object
  },
  methods: {
    fontColor(e) {
      this.widgets.style.color = e ? e : this.widgets.style.color;
    },
    backgroundColor(e) {
      this.widgets.style.background = e ? e : this.widgets.style.background;
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

<template>
  <div class="column-settings-wrapper">
    <WidthType
      :width="column.style.fill"
      @changeWidth="e => (column.style.fill = e)"
    />
    <hr />
    <HorizontalContent
      :horizontal="column.style.x"
      @changeHorizontal="e => (column.style.x = e)"
    />
    <VerticalContent
      :vertical="column.style.y"
      @changeVertical="e => (column.style.y = e)"
    />
    <RangeNumber
      :value="parseInt(column.style.padding)"
      label="Padding"
      @valueChange="e => (column.style.padding = e)"
      min="0"
      max="200"
      step="0"
      v-if="column.style.padding"
    />
    <hr />
    <ColorPicker
      :colorFor="column.style.background"
      label="Background"
      @colorChange="backgroundColor"
      v-if="column.style.background"
    />
  </div>
</template>

<script>
import WidthType from "@/components/utility/WidthType.vue";
import RangeNumber from "@/components/utility/RangeNumber.vue";
import ColorPicker from "@/components/utility/ColorPicker.vue";
VerticalContent;
import HorizontalContent from "@/components/utility/HorizontalContent.vue";
import VerticalContent from "@/components/utility/VerticalContent.vue";
export default {
  components: {
    WidthType,
    RangeNumber,
    VerticalContent,
    HorizontalContent,
    ColorPicker
  },
  props: {
    column: Object
  },
  methods: {
    backgroundColor(e) {
      this.column.style.background = e ? e : this.column.style.background;
    }
  }
};
</script>

<style lang="scss" scoped></style>

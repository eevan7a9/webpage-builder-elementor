<template>
  <div class="element-item-wrapper">
    <component
      :is="selectedComponent"
      :content="element.content"
      :elementId="element.id"
      :columnId="columnId"
      :sectionId="sectionId"
    />
  </div>
</template>

<script>
import HeadingWidget from "@/components/widgets/HeadingWidget.vue";
import TextWidget from "@/components/widgets/TextWidget.vue";
import ListWidget from "@/components/widgets/ListWidget.vue";
import ButtonWidget from "@/components/widgets/ButtonWidget.vue";
import SpacerWidget from "@/components/widgets/SpacerWidget.vue";
import ImageWidget from "@/components/widgets/ImageWidget.vue";
export default {
  components: {
    HeadingWidget,
    TextWidget,
    ListWidget,
    ButtonWidget,
    SpacerWidget,
    ImageWidget
  },
  data() {
    return {
      selectedComponent: "TextWidget"
    };
  },
  props: {
    element: Object,
    columnId: Number,
    sectionId: Number
  },
  created() {
    this.selectedComponent = this.element.widget;
  }
};
</script>

<style lang="scss" scoped></style>

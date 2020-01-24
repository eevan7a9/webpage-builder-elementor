<template>
  <div
    class="button-widget-wrapper"
    :class="`d-flex justify-content-${content.style.horizontal}`"
  >
    <button :style="getStyle">
      <div :style="!onEdit ? visible : notVisible">{{ content.text }}</div>
      <WidgetEditText
        :text="content.text"
        :styleWidget="content.style"
        @changeText="e => (content.text = e)"
        @editOff="$emit('editOff', false)"
        v-if="onEdit"
      />
    </button>
  </div>
</template>

<script>
import WidgetEditText from "@/components/widgets/WidgetEditText.vue";
export default {
  components: {
    WidgetEditText
  },
  props: {
    content: Object,
    elementId: Number,
    columnId: Number,
    sectionId: Number,
    onEdit: Boolean
  },
  data() {
    return {
      visible: {
        visibility: "visible"
      },
      notVisible: {
        visibility: "hidden",
        height: "1px"
      }
    };
  },
  computed: {
    getStyle: function() {
      return {
        width: this.content.style.width,
        fontSize: this.content.style.fontSize + "px",
        fontWeight: this.content.style.fontWeight,
        borderRadius: this.content.style.borderRadius + "px",
        color: this.content.style.color,
        background: this.content.style.background,
        padding: this.content.style.padding + "px",
        margin: this.content.style.margin + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

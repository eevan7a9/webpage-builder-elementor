<template>
  <div class="text-widget-wrapper">
    <p :style="getStyle">{{ content.text }}</p>
    <WidgetEditText
      :text="content.text"
      :styleWidget="content.style"
      :textarea="true"
      @changeText="e => (content.text = e)"
      @editOff="$emit('editOff', false)"
      v-if="onEdit"
    />
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
  computed: {
    getStyle: function() {
      return {
        width: this.content.style.width,
        fontSize: this.content.style.fontSize + "px",
        fontWeight: this.content.style.fontWeight,
        textAlign: this.content.style.textAlign,
        borderRadius: this.content.style.borderRadius + "px",
        color: this.content.style.color,
        background: this.content.style.background,
        margin: this.content.style.margin + "px",
        padding: this.onEdit ? "0" : this.content.style.padding + "px",
        visibility: this.onEdit ? "hidden" : "visible",
        height: this.onEdit ? "0px" : "auto"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

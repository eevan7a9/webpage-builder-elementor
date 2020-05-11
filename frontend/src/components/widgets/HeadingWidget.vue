<template>
  <div class="Heading-wrapper h-100">
    <h1 :style="getStyle">{{ content.text }}</h1>
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
        height: this.onEdit ? "1px" : "auto"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

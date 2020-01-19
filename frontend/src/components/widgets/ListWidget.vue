<template>
  <div class="text-widget-wrapper">
    <ul :style="getUlStyle">
      <li v-for="(list, index) in content.list" :key="index">
        {{ list.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    elementId: Number,
    columnId: Number,
    sectionId: Number
  },
  computed: {
    getUlStyle: function() {
      return {
        fontSize: this.content.style.fontSize + "px",
        fontWeight: this.content.style.fontWeight,
        borderRadius: this.content.style.borderRadius + "px",
        padding: this.content.style.padding + "px",
        margin: this.content.style.margin + "px",
        color: this.content.style.color,
        background: this.content.style.background,
        textAlign: this.content.style.textAlign
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="text-widget-wrapper">
    <b-img
      :style="getStyle"
      :src="content.src"
      fluid
      alt="Responsive image"
    ></b-img>
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
    getStyle: function() {
      return {
        width: this.content.style.width,
        borderRadius: this.content.style.borderRadius + "px",
        padding: this.content.style.padding + "px",
        margin: this.content.style.margin + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

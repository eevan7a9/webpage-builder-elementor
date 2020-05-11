<template>
  <div
    class="text-widget-wrapper"
    :class="`d-flex justify-content-${content.style.horizontal}`"
  >
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
    content: Object
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

<template>
  <div :style="getStyle"></div>
</template>

<script>
export default {
  props: {
    content: Object
  },
  computed: {
    getStyle: function() {
      return {
        background: this.content.style.background,
        height: this.content.style.height
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="text-widget-wrapper">
    <p>{{ content.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    elementId: Number,
    columnId: Number,
    sectionId: Number
  }
};
</script>

<style lang="scss" scoped></style>

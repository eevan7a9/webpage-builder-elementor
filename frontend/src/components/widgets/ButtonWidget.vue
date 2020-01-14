<template>
  <div class="text-widget-wrapper">
    <button class="btn btn-primary">{{ content.text }}</button>
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

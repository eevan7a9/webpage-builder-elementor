<template>
  <div class="text-widget-wrapper">
    <ul>
      <li>Something</li>
      <li>Someone</li>
      <li>Somewhere</li>
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
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="Heading-wrapper">
    <h1>{{ content.text }}</h1>
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

<template>
  <div class="text-widget-wrapper">
    <b-img :src="content.src" fluid alt="Responsive image"></b-img>
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

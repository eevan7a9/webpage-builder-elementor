<template>
  <div class="element-item-wrapper">
    <div class="item">{{ element }} , {{ columnId }}, {{ sectionId }}</div>
  </div>
</template>

<script>
export default {
  props: {
    element: Object,
    columnId: Number,

    sectionId: Number
  }
};
</script>

<style lang="scss" scoped></style>

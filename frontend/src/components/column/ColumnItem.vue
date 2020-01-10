<template>
  <div class="column-item">
    <div class="item-content">
      <h1>{{ rowId }}, {{ sectionId }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    column: Object,
    rowId: Number,
    sectionId: Number
  }
};
</script>

<style lang="scss" scoped>
.item-content {
  border: 2px dotted #b5b5b5;
}
</style>

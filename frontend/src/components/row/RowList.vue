<template>
  <div class="rows-wrapper d-flex  flex-column">
    <div v-for="row in rows" :key="row.id" class="w-100 p-3">
      <RowItem />
    </div>
  </div>
</template>

<script>
import RowItem from "@/components/row/RowItem.vue";
export default {
  props: {
    rows: Array
  },
  components: {
    RowItem
  }
};
</script>

<style lang="scss" scoped></style>

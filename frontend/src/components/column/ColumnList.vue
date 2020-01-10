<template>
  <div class="columns-wrapper d-flex justify-content-lg-around">
    <div v-for="column in columns" :key="column.id" class="w-100 p-1">
      <ColumnItem :column="column" :rowId="rowId" :sectionId="sectionId" />
    </div>
  </div>
</template>

<script>
import ColumnItem from "@/components/column/ColumnItem.vue";
export default {
  components: {
    ColumnItem
  },
  props: {
    columns: Array,
    rowId: Number,
    sectionId: Number
  }
};
</script>

<style lang="scss" scoped></style>

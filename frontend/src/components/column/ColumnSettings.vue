<template>
  <div class="column-settings-wrapper">
    <WidthType
      :width="column.style.fill"
      @changeWidth="e => (column.style.fill = e)"
    />
  </div>
</template>

<script>
import WidthType from "@/components/utility/WidthType.vue";
export default {
  components: {
    WidthType
  },
  props: {
    column: Object
  }
};
</script>

<style lang="scss" scoped></style>

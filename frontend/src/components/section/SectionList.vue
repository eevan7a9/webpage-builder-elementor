<template>
  <div class="section-wrapper">
    <SectionItem />
    <hr />
    <SectionAdd />
  </div>
</template>

<script>
import SectionItem from "@/components/section/SectionItem.vue";
import SectionAdd from "@/components/section/SectionAdd.vue";
export default {
  components: {
    SectionItem,
    SectionAdd
  }
};
</script>

<style lang="scss" scoped></style>

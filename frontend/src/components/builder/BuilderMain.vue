<template>
  <div class="builder-main-wrapper container ">
    <SectionList />
  </div>
</template>

<script>
import SectionList from "@/components/section/SectionList.vue";
export default {
  components: {
    SectionList
  }
};
</script>

<style lang="scss" scoped>
.builder-main-wrapper {
  padding: 70px 0px;
  background: #fff;
}
</style>

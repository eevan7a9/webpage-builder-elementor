<template>
  <div class="section-wrapper">
    <div v-for="(section, index) of getSections" :key="index">
      <SectionItem :section="section" />
    </div>
    <hr />
    <SectionAdd />
  </div>
</template>

<script>
import SectionItem from "@/components/section/SectionItem.vue";
import SectionAdd from "@/components/section/SectionAdd.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SectionItem,
    SectionAdd
  },
  computed: {
    ...mapGetters(["getSections"])
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="sidebar-wrapper" :class="{ open: isSidebarOpen }">
    <BuilderSidebarTopnav />
    <div>
      <BuilderSidebarElements />
    </div>
  </div>
</template>

<script>
import BuilderSidebarTopnav from "@/components/builder/BuilderSidebarTopnav.vue";
import BuilderSidebarElements from "@/components/builder/BuilderSidebarElements.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BuilderSidebarTopnav,
    BuilderSidebarElements
  },
  computed: {
    ...mapGetters(["isSidebarOpen"])
  }
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  background: #e7e9ed;
  transition: 0.5s;
  position: fixed;
  z-index: 2;
  left: 0;
  height: 100%;
  width: 0;
  overflow-x: hidden;
  div {
    opacity: 0;
    transition: 0.5s;
  }
  &.open {
    width: 400px;
    div {
      opacity: 1;
    }
  }
}
</style>

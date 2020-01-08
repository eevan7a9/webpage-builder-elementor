<template>
  <div class="builder-wrapper">
    <!-- builder sidebar starts -->
    <BuilderSidebar />
    <!-- builder sidebar ends -->
    <div
      class="main-container"
      :class="isSidebarOpen ? 'sidebar-open' : 'sidebar-close'"
    >
      <!-- builder topbar starts -->
      <BuilderTopbar />
      <!-- builder topbar ends -->

      <!-- builder Main starts -->
      <BuilderMain />
      <!-- builder Main ends -->
    </div>
  </div>
</template>

<script>
import BuilderTopbar from "@/components/builder/BuilderTopbar.vue";
import BuilderSidebar from "@/components/builder/BuilderSidebar.vue";
import BuilderMain from "@/components/builder/BuilderMain.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BuilderSidebar,
    BuilderTopbar,
    BuilderMain
  },
  computed: {
    ...mapGetters(["isSidebarOpen"])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.builder-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  .main-container {
    background: aliceblue;
    width: 100%;
    margin: 0;
    transition: margin-left 0.5s;
    &.sidebar-open {
      margin-left: 400px;
    }
  }
}
</style>

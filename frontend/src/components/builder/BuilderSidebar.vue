<template>
  <div class="sidebar-wrapper" :class="{ open: isSidebarOpen }">
    <BuilderSidebarTopnav />
    <div class="sidebar-content h-100">
      <transition name="fade" mode="out-in">
        <div v-if="getBuilderSidebar === 'elements'">
          <BuilderSidebarSearchbar />
          <BuilderSidebarElements />
        </div>
        <BuilderSidebarSettings v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import BuilderSidebarTopnav from "@/components/builder/BuilderSidebarTopnav.vue";
import BuilderSidebarSearchbar from "@/components/builder/BuilderSidebarSearchbar.vue";
import BuilderSidebarElements from "@/components/builder/BuilderSidebarElements.vue";
import BuilderSidebarSettings from "@/components/builder/BuilderSidebarSettings.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BuilderSidebarTopnav,
    BuilderSidebarSearchbar,
    BuilderSidebarElements,
    BuilderSidebarSettings
  },
  computed: {
    ...mapGetters(["isSidebarOpen", "getBuilderSidebar"])
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
  overflow: hidden;
  width: 0;
  &.open {
    width: 400px;
  }
  .sidebar-content {
    position: relative;
    overflow: auto;
    height: 100vh;
    .none-selected {
      img {
        width: 100px;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

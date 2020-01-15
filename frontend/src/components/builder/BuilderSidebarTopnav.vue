<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-custom-redish">
      <div class="sidebar-top">
        <b-navbar-brand href="#" class="logo">
          elementor
        </b-navbar-brand>
        <span @click="toggleBuilderSidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" /></svg
        ></span>
      </div>
    </b-navbar>
    <div class="action-nav d-flex align-items-center">
      <div
        class="m-auto p-3 border-custom w-100 text-uppercase"
        @click="toggleSidebarTab('elements')"
        :class="getBuilderSidebar == 'elements' ? 'active' : ''"
      >
        ELEMENTS
      </div>
      <div
        class="m-auto p-3 border-custom w-100 text-uppercase"
        @click="toggleSidebarTab('settings')"
        :class="getBuilderSidebar == 'settings' ? 'active' : ''"
      >
        Settings
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getBuilderSidebar"])
  },
  methods: {
    ...mapActions(["toggleBuilderSidebar", "toggleSidebarTab"])
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0;
  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .logo {
      font-family: "Ma Shan Zheng", cursive;
      font-size: 30px;
      padding: 5.6px;
      font-weight: 700;
      flex-grow: 1;
    }
    span {
      color: aliceblue;
      display: flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
.action-nav {
  .border-custom {
    font-size: 14px;
    background: #fff;
    cursor: pointer;
    &.active {
      border-bottom: 4px solid #b7084e;
      background: #f3f4f7;
    }
  }
}
</style>

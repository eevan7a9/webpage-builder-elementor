<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="#" class="logo">
        PageBuilder <img src="@/assets/icons/builder-icon-white.svg" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- Left align nav Items -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="text-uppercase">
            Builder
          </b-nav-item>
          <b-nav-item to="/about" class="text-uppercase">
            About
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-dark {
  z-index: 1;
  top: 0;
  position: sticky;
  .navbar-brand {
    font-family: "Anton", sans-serif;
  }
  .navbar-nav {
    .router-link-exact-active {
      color: aliceblue;
      font-weight: bold;
    }
  }
}
</style>

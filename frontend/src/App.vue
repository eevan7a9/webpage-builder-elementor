<template>
  <div id="app">
    <TopNav />
    <router-view class="app-router-view" />
  </div>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
export default {
  components: {
    TopNav
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton|Ma+Shan+Zheng&display=swap");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  background: aliceblue;
  .app-router-view {
    min-height: calc(100vh - 3.5rem);
  }
  .bg-custom-redish {
    background: #b7084e;
  }
  .border-color-redish {
    border: 3px solid #b7084e;
    transition: 0.5s;
    &:hover {
      border-color: rgb(31, 209, 8);
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

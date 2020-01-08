<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld2 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld2 from "@/components/HelloWorld2.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    HelloWorld2
  }
};
</script>

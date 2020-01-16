<template>
  <div class="color-wrapper d-flex flex-column align-items-center">
    <label for="color" class="w-100 text-left font-weight-bold"
      >{{ label }} : {{ color.hex }}</label
    >
    <Chrome v-model="color" />
  </div>
</template>

<script>
import { Chrome } from "vue-color";
export default {
  components: {
    Chrome
  },
  props: {
    label: String,
    colorFor: String
  },
  data() {
    return {
      color: ""
    };
  },
  watch: {
    color: function() {
      this.$emit("colorChange", this.color.hex);
    }
  },
  created() {
    this.color = this.colorFor;
  }
};
</script>

<style lang="scss" scoped>
.color-wrapper {
  padding-bottom: 20px;
}
</style>

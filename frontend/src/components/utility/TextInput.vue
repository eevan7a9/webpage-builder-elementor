<template>
  <div class="form-group">
    <label for="text" class="ml-1 w-100 text-left font-weight-bold">{{
      label
    }}</label>
    <textarea
      class="form-control"
      name="text"
      id="text"
      rows="2"
      v-model="myText"
    ></textarea>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    label: String
  },
  computed: {
    myText: {
      get() {
        return this.text;
      },
      set(val) {
        this.$emit("textChange", val);
      }
    }
  }
};
</script>

<style></style>

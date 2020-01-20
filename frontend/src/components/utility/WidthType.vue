<template>
  <div class="text-left">
    <label for="radio" class="font-weight-bold">Width :</label>
    <b-form-group>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    width: Boolean
  },
  data() {
    return {
      selected: "true",
      options: [
        { text: "Fill", value: true },
        { text: "Auto", value: false }
      ]
    };
  },
  watch: {
    selected: function(val) {
      this.$emit("changeWidth", val);
    }
  },
  created() {
    this.selected = this.width;
  }
};
</script>

<template>
  <div class="text-left">
    <label for="radio" class="font-weight-bold">Horizontal :</label>
    <b-form-group>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="horizontal"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: String
  },
  data() {
    return {
      selected: this.horizontal,
      options: [
        { text: "Start", value: "start" },
        { text: "Center", value: "center" },
        { text: "End", value: "end" }
      ]
    };
  },
  watch: {
    selected: function(val) {
      this.$emit("changeHorizontal", val);
    }
  }
};
</script>

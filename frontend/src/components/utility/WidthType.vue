<template>
  <div class="text-left">
    <label for="radio" class="font-weight-bold">Width :</label>
    <b-form-group>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radio-inline"
        :disabled="disable"
      ></b-form-radio-group>
      <small class="p-0 m-0 text-danger" v-if="disable">*{{ notice }}</small>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    width: Boolean,
    notice: String,
    disable: Boolean
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

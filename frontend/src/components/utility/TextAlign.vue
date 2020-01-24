<template>
  <div class="text-left">
    <label for="radio" class="font-weight-bold">Text Align</label>
    <b-form-group>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="textalign"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    textAlign: String
  },
  data() {
    return {
      selected: this.textAlign,
      options: [
        { text: "Left", value: "left" },
        { text: "Center", value: "center" },
        { text: "Right", value: "right" }
      ]
    };
  },
  watch: {
    selected: function(val) {
      this.$emit("changeTextAlign", val);
    }
  }
};
</script>

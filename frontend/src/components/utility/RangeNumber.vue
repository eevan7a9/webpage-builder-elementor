<template>
  <div>
    <label for="fontsize" class="w-100 text-left  font-weight-bold">{{
      label
    }}</label>
    <div class="row m-auto align-items-center">
      <b-form-input
        id="rangeFont"
        type="range"
        min="1"
        max="100"
        class="col-9"
        v-model="rangeNumber"
        @change="$emit('valueChange', rangeNumber)"
      ></b-form-input>
      <b-form-input
        id="numberFont"
        type="number"
        min="1"
        max="100"
        class="col-3"
        v-model="rangeNumber"
        @change="$emit('valueChange', rangeNumber)"
      ></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    label: String
  },
  data() {
    return {
      rangeNumber: 0
    };
  },
  created() {
    this.rangeNumber = this.value;
  }
};
</script>

<style></style>

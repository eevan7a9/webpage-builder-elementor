<template>
  <div class="form-group">
    <label for="fontsize" class="w-100 text-left  font-weight-bold"
      >{{ label }} <small>(px)</small></label
    >
    <div class="row m-auto align-items-center">
      <b-form-input
        id="rangeFont"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        class="col-9"
        v-model="rangeNumber"
        @change="$emit('valueChange', rangeNumber)"
      ></b-form-input>
      <b-form-input
        id="numberFont"
        type="number"
        :min="min"
        :max="max"
        :step="step"
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
    label: String,
    min: String,
    max: String,
    step: String
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

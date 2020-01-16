<template>
  <div class=" p-1 py-3">
    {{ fontSize }}, {{ padding }}, {{ margin }}
    <div class="card p-2 pt-2">
      <div class="form-group">
        <label for="text" class="ml-1 w-100 text-left font-weight-bold"
          >Text</label
        >
        <textarea
          class="form-control"
          name="text"
          id="text"
          rows="2"
          v-model="widgets.content.text"
        ></textarea>
      </div>
      <hr />
      <!-- FontSize Padding Margin -->
      <div class="form-group">
        <RangeNumber
          :value="fontSize"
          label="Font Size"
          @valueChange="e => (fontSize = parseInt(e))"
        />
        <RangeNumber
          :value="padding"
          label="Padding"
          @valueChange="e => (padding = parseInt(e))"
        />
        <RangeNumber
          :value="margin"
          label="Margin"
          @valueChange="e => (margin = parseInt(e))"
        />
        <small class="form-text text-muted">Size of Text</small>
      </div>
    </div>
  </div>
</template>

<script>
import RangeNumber from "@/components/utility/RangeNumber.vue";
export default {
  components: {
    RangeNumber
  },
  props: {
    widgets: Object
  },
  data() {
    return {
      fontSize: 20,
      padding: 5,
      margin: 5
    };
  }
};
</script>

<style lang="scss" scoped></style>

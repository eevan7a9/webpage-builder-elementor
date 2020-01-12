<template>
  <div class="elements-wrapper">
    <div class="row m-auto">
      <div
        class="col-6 my-2"
        v-for="(widget, index) in getWidgets"
        :key="index"
      >
        <div class="card py-2 widgets">
          <img :src="require(`@/assets/icons/${widget.icon}`)" class="p-3" />
          <small class="m-0 p-0 text-capitalize text-secondary">{{
            widget.name
          }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getWidgets"])
  },
  created() {
    console.log(this.getWidgets);
  }
};
</script>

<style lang="scss" scoped>
.elements-wrapper {
  .row {
    .widgets {
      cursor: grab;
      &:hover {
        -webkit-box-shadow: -1px 9px 14px -8px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 9px 14px -8px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 9px 14px -8px rgba(0, 0, 0, 0.75);
        transition: 0.3s;
      }
    }
  }
}
</style>

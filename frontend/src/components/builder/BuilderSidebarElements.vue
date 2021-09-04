<template>
  <div class="elements-wrapper">
    <draggable
      :sort="false"
      class="row m-auto"
      v-model="getWidgets.common"
      :group="{ name: 'group-elements', pull: 'clone', put: false }"
    >
      <div
        class="col-6 my-2"
        v-for="(widget, index) in getWidgets.common"
        :key="index"
      >
        <div class="card py-2 widgets">
          <img :src="require(`@/assets/icons/${widget.icon}`)" class="p-5" />
          <small class="m-0 p-0 text-capitalize text-secondary">{{
            widget.name
          }}</small>
        </div>
        <small class="text-success">Available</small>
      </div>
    </draggable>
    <p class="p-0 mt-2 ml-1 text-left text-muted">GENERAL ELEMENTS</p>
    <div class="row m-auto">
      <div
        class="not-available col-6 my-2"
        v-for="(widget, index) in getWidgets.general"
        :key="index"
      >
        <div class="card py-2 widgets">
          <img :src="require(`@/assets/icons/${widget.icon}`)" class="p-5" />
          <small class="m-0 p-0 text-capitalize text-secondary">{{
            widget.name
          }}</small>
        </div>
        <small class="text-danger">Not Available</small>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
export default {
  components: {
    draggable
  },
  computed: {
    ...mapGetters(["getWidgets"])
  }
};
</script>

<style lang="scss" scoped>
.elements-wrapper {
  overflow: auto;
  max-height: 98%;
  margin-bottom: 200px;
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
    .not-available {
      .widgets {
        cursor: not-allowed;
        &:hover {
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
        }
      }
    }
  }
}
</style>

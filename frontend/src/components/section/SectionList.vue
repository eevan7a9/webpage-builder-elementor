<template>
  <div class="section-wrapper">
    <draggable
      v-model="mySections"
      v-bind="dragOptions"
      handle=".section-handle"
    >
      <transition-group type="transition" name="flip-list">
        <div v-for="section in mySections" :key="section.id">
          <SectionItem :section="section" />
        </div>
      </transition-group>
    </draggable>
    <hr />
    <SectionAdd />
  </div>
</template>

<script>
import SectionItem from "@/components/section/SectionItem.vue";
import SectionAdd from "@/components/section/SectionAdd.vue";
import draggable from "vuedraggable";
// import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    SectionItem,
    SectionAdd,
    draggable
  },
  computed: {
    mySections: {
      get() {
        return this.$store.state.page.sections;
      },
      set(value) {
        // this.$store.commit("setColumns", value);
        this.$store.dispatch("updateSections", value);
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: "group-sections",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

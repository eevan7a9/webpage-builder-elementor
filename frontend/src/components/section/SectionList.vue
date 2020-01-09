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
        return this.$store.state.sections.sections;
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

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s;
}
.flip-list-enter, .flip-list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

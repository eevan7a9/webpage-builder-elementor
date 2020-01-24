<template>
  <div class="list-widget-wrapper">
    <ul :style="getUlStyle">
      <li
        v-for="(list, index) in content.list"
        :key="index"
        @click="selectedList = list.id"
      >
        <div :style="selectedList == list.id ? notVisible : visible">
          {{ list.text }}
        </div>
        <WidgetEditText
          :text="list.text"
          :styleWidget="content.style"
          @changeText="e => (list.text = e)"
          @editOff="selectedList = 0"
          v-if="selectedList == list.id"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import WidgetEditText from "@/components/widgets/WidgetEditText.vue";
export default {
  components: {
    WidgetEditText
  },
  props: {
    content: Object,
    elementId: Number,
    columnId: Number,
    sectionId: Number
  },
  data() {
    return {
      selectedList: 0,
      visible: {
        visibility: "visible"
      },
      notVisible: {
        visibility: "hidden",
        height: "1px"
      }
    };
  },
  computed: {
    getUlStyle: function() {
      return {
        fontSize: this.content.style.fontSize + "px",
        fontWeight: this.content.style.fontWeight,
        borderRadius: this.content.style.borderRadius + "px",
        padding: this.content.style.padding + "px",
        margin: this.content.style.margin + "px",
        color: this.content.style.color,
        background: this.content.style.background,
        textAlign: this.content.style.textAlign
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

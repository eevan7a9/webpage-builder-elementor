<template>
  <div
    class="list-widget-wrapper"
    :class="`d-flex justify-content-${content.style.horizontal}`"
  >
    <ul :style="getUlStyle">
      <li
        v-for="(list, index) in content.list"
        :key="index"
        @click="selectedList = list.id"
        :style="`text-align: ${content.style.textAlign}`"
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
    content: Object
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
        background: this.content.style.background
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

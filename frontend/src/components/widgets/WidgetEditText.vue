<template>
  <div class="wrapper w-100">
    <input
      type="text"
      name="textEdit"
      ref="textEdit"
      :style="getStyle"
      @keyup.enter="submit"
      v-model="myText"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    text: String,
    styleWidget: Object
  },
  computed: {
    myText: {
      get() {
        return this.text;
      },
      set(val) {
        this.$refs.textEdit.style.width = this.text.length + 2 + "ch";
        this.$emit("changeText", val);
      }
    },
    getStyle: function() {
      return {
        fontSize: this.styleWidget.fontSize + "px",
        fontWeight: this.styleWidget.fontWeight,
        color: this.styleWidget.color
        // padding: this.styleWidget.padding + "px"
      };
    }
  },

  mounted() {
    this.$refs.textEdit.focus();
    this.$refs.textEdit.style.width = this.text.length + 2 + "ch";
  },
  methods: {
    ...mapActions(["selectWidget", "toggleSidebarTab"]),
    submit() {
      this.selectWidget({});
      this.toggleSidebarTab("elements");
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  background: rgba(240, 248, 255, 0.507);
  border: none;
  padding: 2px;
}
</style>

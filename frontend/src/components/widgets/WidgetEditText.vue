<template>
  <div class="wrapper w-100">
    <input
      type="text"
      name="textEdit"
      ref="textEdit"
      :style="getStyle"
      @keyup.enter="submit"
      @blur="$emit('editOff', false)"
      v-model="myText"
      v-if="!textarea"
    />
    <textarea
      name="textEdit"
      ref="textarea"
      :style="getStyle"
      @keyup.enter="submit"
      @focus="autoGrow"
      @input="autoGrow"
      @blur="$emit('editOff', false)"
      v-model="myText"
      v-else
    ></textarea>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    text: String,
    styleWidget: Object,
    textarea: Boolean
  },
  computed: {
    myText: {
      get() {
        return this.text;
      },
      set(val) {
        if (!this.textarea) {
          this.$refs.textEdit.style.width = this.text.length + 2 + "ch";
        }
        this.$emit("changeText", val);
      }
    },
    getStyle: function() {
      return {
        fontSize: this.styleWidget.fontSize + "px",
        fontWeight: this.styleWidget.fontWeight,
        color: this.styleWidget.color,
        background: this.textarea
          ? this.styleWidget.background
          : "rgba(240, 248, 255, 0.507)"
        // padding: this.styleWidget.padding + "px"
      };
    }
  },
  watch: {
    text: function(val) {
      this.myText = val;
      if (this.textarea) {
        // if textarea then enable grow
        this.autoGrow();
      }
    }
  },
  mounted() {
    if (!this.textarea) {
      this.$refs.textEdit.focus();
      this.$refs.textEdit.style.width = this.text.length + 2 + "ch";
    } else {
      this.$refs.textarea.focus();
    }
  },
  methods: {
    ...mapActions(["selectWidget", "toggleSidebarTab"]),
    submit() {
      this.selectWidget({});
      this.toggleSidebarTab("elements");
      this.$emit("editOff", false);
    },
    autoGrow() {
      let textarea = this.$refs.textarea;
      textarea.style.height = "5px";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border: none;
  padding: 2px;
}
textarea {
  resize: none;
  overflow: hidden;
  width: 100%;
  border: none;
  &:focus {
    border: none;
    outline-width: 0;
  }
}
</style>

<template>
  <div class="list-wrapper">
    <h5 v-for="(list, index) in lists" :key="index">
      <TextInput
        :text="list.text"
        :label="'Item ' + (index + 1)"
        @textChange="e => (list.text = e)"
      />
    </h5>
  </div>
</template>

<script>
import TextInput from "@/components/utility/TextInput.vue";
export default {
  components: {
    TextInput
  },
  props: {
    lists: Array
  }
};
</script>

<style lang="scss" scoped></style>

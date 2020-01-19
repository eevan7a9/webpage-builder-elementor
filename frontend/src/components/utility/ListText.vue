<template>
  <div class="list-wrapper m-0 p-0">
    <div class="form-group">
      <form @submit.prevent="addItem">
        <label for="item" class="w-100 text-left">New Item</label>
        <textarea
          class="form-control"
          name="item"
          v-model="newItem"
          rows="2"
          placeholder="Lorem ipsum posuere, euismod..."
          required
        ></textarea>
        <div class="w-100 text-right">
          <button class="btn btn-success mt-2" type="submit">Add</button>
        </div>
      </form>
    </div>
    <div>
      <div class="text-left">
        <button @click="visible = !visible" class="btn btn-primary">
          List Items
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
      <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <div v-for="(list, index) in lists" :key="index">
          <TextEdit
            :text="list.text"
            :label="'Item ' + (index + 1)"
            @textChange="e => (list.text = e)"
          />
        </div>
      </b-collapse>
      <hr />
    </div>
  </div>
</template>

<script>
import { toTimestamp } from "@/assets/scripts/evan-custom.js";
import TextEdit from "@/components/utility/TextEdit.vue";
export default {
  components: {
    TextEdit
  },
  props: {
    lists: Array
  },
  data() {
    return {
      visible: true,
      newItem: ""
    };
  },
  methods: {
    addItem() {
      console.log(this.newItem);
      this.lists.push({
        id: toTimestamp(new Date()),
        text: this.newItem
      });
      this.newItem = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>

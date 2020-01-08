<template>
  <div class="hello">
    <div>
      <draggable class="list-group" v-model="myColumns" group="group1">
        <transition-group>
          <div
            v-for="(element, index) in myColumns"
            :key="index + element.name"
          >
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <div>
      <draggable
        v-model="myColumns2"
        group="group1"
        tag="ul"
        v-bind="dragOptions"
        @add="addItem"
      >
        <transition-group type="transition" name="flip-list">
          <!-- <div v-for="(element, index) in myColumns2" :key="index">
            {{ element.name }}
          </div> -->
          <li
            class="list-group-item"
            v-for="(element, index) in myColumns2"
            :key="element.name + index"
          >
            {{ element.name }}
          </li>
        </transition-group>
      </draggable>
    </div>
    <div>somthing here</div>
    <div>{{ myColumns }}</div>
    <button class="btn btn-danger">danger</button>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "HelloWorld",
  components: {
    draggable
  },
  props: {
    msg: String
  },
  data() {
    return {
      myColumns2: [
        { id: 1, name: "col1" },
        { id: 2, name: "col2" },
        { id: 3, name: "col3" }
      ]
    };
  },
  computed: {
    myColumns: {
      get() {
        return this.$store.state.columns.columns;
      },
      set(value) {
        // this.$store.commit("setColumns", value);
        this.$store.dispatch("updateColumns", value);
      }
    },

    dragOptions() {
      return {
        animation: 0,
        group: "group1",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    addItem(e) {
      console.log(e);
    },
    cloneItem(e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  justify-content: center;
  div {
    margin: 10px;
    background: rgb(240, 240, 239);
  }
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>

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
        class="list-group"
        tag="ul"
        v-model="myColumns2"
        v-bind="dragOptions"
      >
        <transition-group type="transition" name="flip-list">
          <li
            class="list-group-item"
            v-for="element in myColumns2"
            :key="element.id"
          >
            {{ element.name }}
          </li>
        </transition-group>
      </draggable>
    </div>
    <div>somthing here</div>
    <div>{{ myColumns }}</div>
    <button class="btn btn-danger" @click="addCol">danger</button>
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
        this.$store.dispatch("setSections", value);
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
    },
    addCol() {
      this.myColumns2.push({ id: 4, name: "col4" });
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

// .flip-list-enter-active,
// .flip-list-leave-active {
//   transition: opacity 0.5s;
// }
// .flip-list-enter, .flip-list-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

// .flip-list-enter-active {
//   transition: all 0.3s ease;
// }
// .flip-list-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .flip-list-enter, .flip-list-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }

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

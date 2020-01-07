<template>
  <div class="hello">
    <div>
      <draggable v-model="myColumns">
        <transition-group>
          <div v-for="element in myColumns" :key="element.id">
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <div>somthing here</div>
    <div>{{ myColumns }}</div>
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
  computed: {
    myColumns: {
      get() {
        return this.$store.state.columns.columns;
      },
      set(value) {
        this.$store.commit("setColumns", value);
      }
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
</style>

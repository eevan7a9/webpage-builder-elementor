<template>
  <div>
    <draggable
      v-model="myColumns3"
      :group="{ name: 'group1', pull: 'clone', put: false }"
      :sort="false"
    >
      <transition-group>
        <div v-for="(element, index) in myColumns3" :key="element.id + index">
          {{ element.name }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      myColumns3: [
        {
          id: 1,
          name: "Lol1"
        },
        {
          id: 2,
          name: "Lol2"
        },
        {
          id: 3,
          name: "Lol3"
        }
      ]
    };
  }
};
</script>

<style scoped></style>

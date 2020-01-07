import Vue from "vue";
import Vuex from "vuex";
import columns from "./modules/columns.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    columns
  }
});

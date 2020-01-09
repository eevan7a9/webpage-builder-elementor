import Vue from "vue";
import Vuex from "vuex";
import columns from "./modules/columns.js";
import builderSidebar from "./modules/builder-sidebar.js";
import sections from "./modules/sections.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    columns,
    builderSidebar,
    sections
  }
});

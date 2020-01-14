import Vue from "vue";
import Vuex from "vuex";
import builderSidebar from "./modules/builder-sidebar.js";
import page from "./modules/page.js";
import layouts from "./modules/layouts.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    builderSidebar,
    page,
    layouts
  }
});

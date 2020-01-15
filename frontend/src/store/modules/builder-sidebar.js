import builderData from "@/assets/builder-data.json";

const state = {
  sidebarStatus: true,
  builderSidebarTab: "elements", // sidebar elements | styles
  widgets: builderData.widgets.common
};
const getters = {
  isSidebarOpen: state => state.sidebarStatus,
  getBuilderSidebar: state => state.builderSidebarTab,
  getWidgets: state => state.widgets
};
const actions = {
  toggleBuilderSidebar: ({ commit }) => {
    commit("setSidebar");
    console.log("sidebar toggled");
  },
  toggleSidebarTab: ({ commit }, value) => {
    commit("setBuilderSidebar", value);
  }
};
const mutations = {
  setSidebar: state => (state.sidebarStatus = !state.sidebarStatus),
  setBuilderSidebar: (state, tab) => (state.builderSidebarTab = tab)
};

export default {
  state,
  getters,
  actions,
  mutations
};

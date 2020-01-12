const state = {
  sidebarStatus: true,
  builderSidebarTab: "elements" // sidebar elements | styles
};
const getters = {
  isSidebarOpen: state => state.sidebarStatus,
  getBuilderSidebar: state => state.builderSidebarTab
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

const state = {
  sidebarStatus: true
};
const getters = {
  isSidebarOpen: state => state.sidebarStatus
};
const actions = {
  toggleBuilderSidebar: ({ commit }) => {
    commit("setSidebar");
    console.log("sidebar toggled");
  }
};
const mutations = {
  setSidebar: state => (state.sidebarStatus = !state.sidebarStatus)
};

export default {
  state,
  getters,
  actions,
  mutations
};

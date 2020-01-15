import builderData from "@/assets/builder-data.json";

const state = {
  sidebarStatus: true,
  builderSidebarTab: "elements", // sidebar elements | styles
  widgets: builderData.widgets.common,
  selectedWidget: {}
};
const getters = {
  isSidebarOpen: state => state.sidebarStatus,
  getBuilderSidebar: state => state.builderSidebarTab,
  getWidgets: state => state.widgets,
  getSelectedWidget: state => state.selectedWidget
};
const actions = {
  toggleBuilderSidebar: ({ commit }) => {
    commit("setSidebar");
    console.log("sidebar toggled");
  },
  toggleSidebarTab: ({ commit }, value) => {
    commit("setBuilderSidebar", value);
  },
  fetchWidgets: ({ commit }, name) => {
    if (name) {
      const widgets = builderData.widgets.common.filter(widget =>
        widget.name.toLowerCase().includes(name.toLowerCase())
      );
      commit("setWidgets", widgets);
    } else {
      commit("setWidgets", builderData.widgets.common);
    }
  },
  selectWidget: ({ commit }, widget) => {
    commit("setSelectedWidget", widget);
  }
};
const mutations = {
  setSidebar: state => (state.sidebarStatus = !state.sidebarStatus),
  setBuilderSidebar: (state, tab) => (state.builderSidebarTab = tab),
  setWidgets: (state, widgets) => (state.widgets = widgets),
  setSelectedWidget: (state, widget) => (state.selectedWidget = widget)
};

export default {
  state,
  getters,
  actions,
  mutations
};

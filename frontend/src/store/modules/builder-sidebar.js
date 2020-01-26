import builderData from "@/assets/builder-data.json";

const state = {
  sidebarStatus: true,
  builderSidebarTab: "elements", // sidebar elements | styles
  widgets: JSON.parse(JSON.stringify(builderData.widgets)),
  settings: {
    content: false,
    tabOpen: 0,
    widget: {},
    column: {}
  }
};
const getters = {
  isSidebarOpen: state => state.sidebarStatus,
  getBuilderSidebar: state => state.builderSidebarTab,
  getWidgets: state => state.widgets,
  getSettings: state => state.settings
};
const actions = {
  toggleBuilderSidebar: ({ commit }) => {
    commit("setSidebar");
  },
  toggleSidebarTab: ({ commit }, value) => {
    commit("setBuilderSidebar", value);
  },
  fetchWidgets: ({ commit }, name) => {
    if (name) {
      const common = JSON.parse(
        JSON.stringify(builderData.widgets.common)
      ).filter(widget =>
        widget.name.toLowerCase().includes(name.toLowerCase())
      );
      const general = JSON.parse(
        JSON.stringify(builderData.widgets.general)
      ).filter(widget =>
        widget.name.toLowerCase().includes(name.toLowerCase())
      );
      commit("setWidgets", { common: common, general: general });
    } else {
      commit("setWidgets", builderData.widgets);
    }
  },
  selectWidget: ({ commit }, { widget, column }) => {
    commit("setSelectedWidget", { widget: widget, column: column });
  },
  selectColumn: ({ commit }, column) => {
    commit("setSelectedColumn", column);
  }
};
const mutations = {
  setSidebar: state => (state.sidebarStatus = !state.sidebarStatus),
  setBuilderSidebar: (state, tab) => (state.builderSidebarTab = tab),
  setWidgets: (state, widgets) => {
    state.widgets.common = widgets.common;
    state.widgets.general = widgets.general;
  },
  setSelectedWidget: (state, data) => {
    if (data.widget || data.column) {
      state.settings.widget = data.widget;
      state.settings.column = data.column;
      state.settings.tabOpen = 0;
      state.settings.content = true;
    } else {
      state.settings.widget = {};
      state.settings.column = {};
      state.settings.content = false;
    }
  },
  setSelectedColumn: (state, column) => {
    state.settings.column = column;
    state.settings.widget = {};
    if (column.id) {
      state.settings.content = true;
      state.settings.tabOpen = 1;
    } else {
      state.settings.content = false;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

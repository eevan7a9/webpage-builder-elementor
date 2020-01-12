const state = {
  sidebarStatus: true,
  builderSidebarTab: "elements", // sidebar elements | styles
  widgets: [
    {
      id: 1,
      name: "Heading",
      icon: "heading-icon.svg"
    },
    {
      id: 2,
      name: "Text Editor",
      icon: "text-icon.svg"
    },
    {
      id: 3,
      name: "Lists",
      icon: "lists-icon.svg"
    },
    {
      id: 4,
      name: "Button",
      icon: "button-icon.svg"
    },
    {
      id: 5,
      name: "Image",
      icon: "image-icon.svg"
    },
    {
      id: 6,
      name: "Spacer",
      icon: "spacer-icon.svg"
    }
  ]
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

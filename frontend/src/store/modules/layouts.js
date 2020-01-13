import builderData from "@/assets/builder-data.json";

const state = {
  layoutChoices: builderData.layouts
};
const getters = {
  getLayouts: state => state.layoutChoices
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};

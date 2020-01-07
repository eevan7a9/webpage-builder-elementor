const state = {
  columns: [
    {
      id: 1,
      name: "user1"
    },
    {
      id: 2,
      name: "user2"
    },
    {
      id: 3,
      name: "user3"
    }
  ]
};
const getters = {
  getColumns: state => state.myArray
};
const actions = {};
const mutations = {
  setColumns: (state, columns) => (state.columns = columns)
};

export default {
  state,
  getters,
  actions,
  mutations
};

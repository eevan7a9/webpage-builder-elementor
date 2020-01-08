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
const actions = {
  updateColumns: ({ commit }, value) => {
    commit("setColumns", value);
    console.log(value);
  }
};
const mutations = {
  setColumns: (state, columns) => (state.columns = columns),
  insertColumn: (state, column) => state.columns.unshift(column)
};

export default {
  state,
  getters,
  actions,
  mutations
};

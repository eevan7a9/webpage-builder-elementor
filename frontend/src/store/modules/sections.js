const state = {
  sectionIdCounter: 2,
  sections: [
    {
      id: 1,
      rows: [
        {
          id: 1,
          columns: [
            {
              id: 1,
              elements: [
                {
                  id: 1,
                  elementName: "something"
                }
              ]
            },
            {
              id: 2,
              elements: [
                {
                  id: 1,
                  elementName: "something"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          columns: [
            {
              id: 1,
              elements: [
                {
                  id: 1,
                  elementName: "something"
                }
              ]
            },
            {
              id: 2,
              elements: [
                {
                  id: 1,
                  elementName: "something"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
const getters = {
  getSections: state => state.sections
};
const actions = {
  addSection: ({ commit, state }) => {
    const newSection = {
      id: state.sectionIdCounter + 1,
      rows: [
        {
          id: 1,
          columns: []
        }
      ]
    };
    commit("insertSection", newSection);
  },
  deleteSection: ({ commit }, id) => {
    commit("removeSection", id);
  },
  updateSections: ({ commit }, value) => {
    commit("setSections", value);
  }
};
const mutations = {
  setSections: (state, sections) => (state.sections = sections),
  insertSection: (state, section) => {
    state.sections.push(section);
    state.sectionIdCounter++;
  },
  removeSection: (state, id) =>
    (state.sections = state.sections.filter(section => section.id != id))
};

export default {
  state,
  getters,
  actions,
  mutations
};

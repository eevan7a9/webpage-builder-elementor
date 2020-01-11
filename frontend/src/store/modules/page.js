import { getLatestId, toTimestamp } from "@/assets/scripts/evan-custom.js";

const state = {
  sections: [
    {
      id: 1,
      rows: [
        {
          id: 1,
          layout: true,
          columns: [
            {
              id: 1,
              grid: "col-md-8",
              elements: [
                {
                  id: 1,
                  elementName: "something"
                }
              ]
            },
            {
              id: 2,
              grid: "col-md-2",
              elements: [
                {
                  id: 1,
                  elementName: "something"
                }
              ]
            },
            {
              id: 3,
              grid: "col-md-2",
              elements: [
                {
                  id: 1,
                  elementName: "something"
                },
                {
                  id: 2,
                  elementName: "something"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          layout: false,
          columns: [
            {
              id: 1,
              grid: null,
              elements: []
            },
            {
              id: 2,
              grid: null,
              elements: [
                {
                  id: 1,
                  elementName: "something"
                },
                {
                  id: 2,
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
    // we get the id of the highest/latest id in sections
    const latestSectionId = getLatestId(state.sections);
    const newSection = {
      id: latestSectionId + 1,
      rows: [
        {
          id: toTimestamp(new Date()),
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
  },
  //  Sections Rows *************************************
  addRow: ({ commit, state }, sectionId) => {
    //  we get the section we want to add the row
    const section = state.sections.find(sec => sec.id === sectionId);
    if (section) {
      const newRow = {
        id: toTimestamp(new Date()),
        columns: []
      };
      commit("insertRow", { item: newRow, sectionId: sectionId });
    }
  },
  updateRow: ({ commit }, { rows, sectionId }) => {
    commit("setRows", { item: rows, sectionId: sectionId });
  },
  deleteRow: ({ commit }, { rowId, sectionId }) => {
    commit("removeRow", { rowId: rowId, sectionId: sectionId });
  },
  //  Sections Columns *************************************
  updateColumns: ({ commit }, { column, rowId, sectionId }) => {
    commit("setColumns", { item: column, rowId: rowId, sectionId: sectionId });
  },
  deleteColumnContent: ({ commit }, { columnId, rowId, sectionId }) => {
    commit("removeColumnContent", {
      columnId: columnId,
      rowId: rowId,
      sectionId: sectionId
    });
  }
};

const mutations = {
  setSections: (state, sections) => (state.sections = sections),
  insertSection: (state, section) => state.sections.push(section),
  removeSection: (state, id) =>
    (state.sections = state.sections.filter(section => section.id != id)),
  insertRow: (state, row) => {
    const sectionFound = state.sections.find(sec => sec.id === row.sectionId);
    if (sectionFound) {
      sectionFound.rows.push(row.item);
    }
  },
  setRows: (state, rows) => {
    const sectionFound = state.sections.find(sec => sec.id == rows.sectionId);
    if (sectionFound) {
      sectionFound.rows = rows.item;
    }
  },
  removeRow: (state, data) => {
    let foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      foundSection.rows = foundSection.rows.filter(row => row.id != data.rowId);
    }
  },
  setColumns: (state, column) => {
    const foundSection = state.sections.find(sec => sec.id == column.sectionId);
    if (foundSection) {
      const foundRow = foundSection.rows.find(row => row.id == column.rowId);
      if (foundRow) {
        foundRow.columns = column.item;
      }
    }
  },
  removeColumnContent: (state, data) => {
    const foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      const foundRow = foundSection.rows.find(row => row.id == data.rowId);
      if (foundRow.layout) {
        const foundColumn = foundRow.columns.find(
          col => col.id == data.columnId
        );
        if (foundColumn) {
          foundColumn.elements = [];
        }
      } else {
        foundRow.columns = foundRow.columns.filter(
          col => col.id != data.columnId
        );
      }
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

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
                  id: 131,
                  elementName: "something"
                }
              ]
            },
            {
              id: 2,
              grid: "col-md-2",
              elements: [
                {
                  id: 132,
                  elementName: "something"
                }
              ]
            },
            {
              id: 3,
              grid: "col-md-2",
              elements: [
                {
                  id: 12,
                  elementName: "something"
                },
                {
                  id: 13,
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
                  id: 51,
                  elementName: "something"
                },
                {
                  id: 52,
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
        id: toTimestamp(new Date()) + section.rows.length,
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
  addRowColumns: ({ commit }, { row, sectionId }) => {
    commit("setRowColumns", { row: row, sectionId: sectionId });
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
  },
  addColumn: ({ commit }, { column, rowId, sectionId }) => {
    commit("insertColumn", {
      column: column,
      rowId: rowId,
      sectionId: sectionId
    });
  },

  //  Sections Elements *************************************

  updateElements: ({ commit }, { elements, columnId, rowId, sectionId }) => {
    commit("setElements", {
      item: elements,
      columnId: columnId,
      rowId: rowId,
      sectionId: sectionId
    });
  }
};

const mutations = {
  // SECTION STARTS
  setSections: (state, sections) => (state.sections = sections),
  insertSection: (state, section) => state.sections.push(section),
  removeSection: (state, id) =>
    (state.sections = state.sections.filter(section => section.id != id)),
  // ROWS STARTS
  insertRow: (state, row) => {
    const foundSection = state.sections.find(sec => sec.id === row.sectionId);
    if (foundSection) {
      foundSection.rows.push(row.item);
    }
  },
  setRows: (state, rows) => {
    const foundSection = state.sections.find(sec => sec.id == rows.sectionId);
    if (foundSection) {
      foundSection.rows = rows.item;
      console.log(rows);
    }
  },
  removeRow: (state, data) => {
    let foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      foundSection.rows = foundSection.rows.filter(row => row.id != data.rowId);
    }
  },
  setRowColumns: (statem, data) => {
    const foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      let foundRow = foundSection.rows.find(row => row.id == data.row.id);
      foundRow.labe = data.row.label;
      foundRow.layout = data.row.layout;
      foundRow.columns = data.row.columns;
    }
  },
  //  COLUMNS STARTS
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
  },
  insertColumn: (state, data) => {
    const foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      let foundRow = foundSection.rows.find(row => row.id == data.rowId);
      foundRow.columns.push(data.column);
    }
  },
  //  ElEMENTSS START
  setElements: (state, element) => {
    const foundSection = state.sections.find(
      sec => sec.id == element.sectionId
    );
    if (foundSection) {
      const foundRow = foundSection.rows.find(row => row.id == element.rowId);
      if (foundRow) {
        const foundColumn = foundRow.columns.find(
          col => col.id == element.columnId
        );
        if (foundColumn) {
          foundColumn.elements = element.item;
        }
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

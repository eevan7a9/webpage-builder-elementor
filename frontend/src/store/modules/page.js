import { getLatestId, toTimestamp } from "@/assets/scripts/evan-custom.js";
import dummySectionData from "@/assets/dummy-section-data.json";

const state = {
  sections: dummySectionData.sections
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
      columns: []
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
  addSectionColumns: ({ commit }, { layout, sectionId }) => {
    commit("setSectionColumns", { id: sectionId, sectionLayout: layout });
    // commit("setRowColumns", { row: row, sectionId: sectionId });
  },

  //  Sections Columns *************************************

  updateColumns: ({ commit }, { column, sectionId }) => {
    commit("setColumns", { item: column, sectionId: sectionId });
  },
  deleteColumnContent: ({ commit }, { columnId, sectionId }) => {
    commit("removeColumnContent", {
      columnId: columnId,
      sectionId: sectionId
    });
  },
  addColumn: ({ commit }, { column, sectionId }) => {
    commit("insertColumn", {
      column: column,
      sectionId: sectionId
    });
  },

  //  Sections Elements *************************************

  updateElements: ({ commit }, { elements, columnId, sectionId }) => {
    // we find the newly added element
    const foundElement = elements.find(el => el.new == true);
    if (foundElement) {
      foundElement.id = toTimestamp(new Date()); // assign new unique ID
      foundElement.new = false; // element is now not new
    }
    commit("setElements", {
      item: elements,
      columnId: columnId,
      sectionId: sectionId
    });
    console.log(foundElement);
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
  setSectionColumns: (state, section) => {
    const foundSection = state.sections.find(sec => sec.id == section.id);
    if (foundSection) {
      foundSection.label = section.sectionLayout.label;
      foundSection.layout = section.sectionLayout.layout;
      foundSection.columns = section.sectionLayout.columns;
    }
  },
  //  COLUMNS STARTS
  setColumns: (state, column) => {
    const foundSection = state.sections.find(sec => sec.id == column.sectionId);
    if (foundSection) {
      foundSection.columns = column.item;
    }
  },
  removeColumnContent: (state, data) => {
    const foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      if (foundSection.layout) {
        const foundColumn = foundSection.columns.find(
          col => col.id == data.columnId
        );
        if (foundColumn) {
          foundColumn.elements = [];
        }
      } else {
        foundSection.columns = foundSection.columns.filter(
          col => col.id != data.columnId
        );
      }
    }
  },
  insertColumn: (state, data) => {
    const foundSection = state.sections.find(sec => sec.id == data.sectionId);
    if (foundSection) {
      foundSection.columns.push(data.column);
    }
  },
  //  ElEMENTSS START
  setElements: (state, element) => {
    const foundSection = state.sections.find(
      sec => sec.id == element.sectionId
    );
    if (foundSection) {
      const foundColumn = foundSection.columns.find(
        col => col.id == element.columnId
      );
      if (foundColumn) {
        foundColumn.elements = element.item;
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

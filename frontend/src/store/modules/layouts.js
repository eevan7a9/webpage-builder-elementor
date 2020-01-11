import { toTimestamp } from "@/assets/scripts/evan-custom.js";

const state = {
  layoutChoices: [
    {
      label: "6/12 ~ 6/12",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-6",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-6",
          elements: []
        }
      ]
    },
    {
      label: "4/12 ~ 8/12",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-4",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-8",
          elements: []
        }
      ]
    },
    {
      label: "3/12 ~ 9/12",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-3",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-9",
          elements: []
        }
      ]
    },
    {
      label: "3/12(2) ~ 6/12",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-3",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-6",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 2,
          grid: "col-md-3",
          elements: []
        }
      ]
    },
    {
      label: "2/12 ~ 4/12 ~ 6/12",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-2",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-4",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 2,
          grid: "col-md-6",
          elements: []
        }
      ]
    },
    {
      label: "2/12 ~ 5/12(2)",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-2",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-5",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 2,
          grid: "col-md-5",
          elements: []
        }
      ]
    },
    {
      label: "2/12(3) ~ 6/12",
      layout: true,
      columns: [
        {
          id: toTimestamp(new Date()),
          grid: "col-md-2",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 1,
          grid: "col-md-2",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 2,
          grid: "col-md-2",
          elements: []
        },
        {
          id: toTimestamp(new Date()) + 3,
          grid: "col-md-6",
          elements: []
        }
      ]
    }
  ]
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

import * as types from "./types";

export const mutations = {
  [types.LOADING](state, { loading }) {
    state.loading = loading;
  },
  [types.ISCOLLAPSE](state, { isCollapse }) {
    state.isCollapse = isCollapse;
  },
  [types.BREADCRUMBS](state, { breadCrumbs }) {
    state.breadCrumbs = breadCrumbs;
  },
  [types.DEFAULTPATH](state, { defaultPath }) {
    state.defaultPath = defaultPath;
  }
};

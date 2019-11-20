export const getters = {
  loading: state => {
    return state.loading;
  },
  isCollapse: state => {
    return state.isCollapse;
  },
  menu: state => {
    return state.menu;
  },
  breadCrumbs: state => {
    return state.breadCrumbs;
  },
  defaultPath: state => {
    return state.defaultPath;
  }
};

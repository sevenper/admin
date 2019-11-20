// import { axiosHttp } from "../utils/http";

// const axios = new axiosHttp();

export const actions = {
  changeCollapse({ commit, state }) {
    commit("ISCOLLAPSE", { isCollapse: true });
  }
};

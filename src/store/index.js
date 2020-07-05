import Vue from "vue";
import Vuex from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    isCollapse: false,
    breadCrumbs: [],
    defaultPath: "/index",
    menu: [
      {
        name: "首页",
        path: "/index"
      },
      {
        name: "zenmock",
        path: "/mock"
      },
      // {
      //   name: "操作菜单",
      //   path: "/operate",
      //   children: [
      //     {
      //       name: "修改",
      //       path: "/operate/change"
      //     },
      //     {
      //       name: "保存",
      //       path: "/operate/save"
      //     }
      //   ]
      // },
      // {
      //   name: "记录",
      //   path: "/operates",
      //   children: [
      //     {
      //       name: "昨日",
      //       path: "/operates/changes"
      //     },
      //     {
      //       name: "今日",
      //       path: "/operates/saves"
      //     }
      //   ]
      // }
    ]
  },
  mutations: mutations,
  actions: actions,
  getters: getters
});

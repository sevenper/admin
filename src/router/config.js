import Login from "../views/Login";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/Index"),
        pathname: "首页",
        meta: { requiresLogin: true }
      },
      {
        path: "/operate/change",
        name: "index",
        component: () => import("../views/Change"),
        pathname: "修改",
        meta: { requiresLogin: true }
      },
      {
        path: "/operate/save",
        name: "save",
        component: () => import("../views/Save"),
        pathname: "保存",
        meta: { requiresLogin: true }
      }
    ]
  }
];

export default routes;

import Vue from "vue";
import axios from "axios";

axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  config => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
      config.headers.common["token"] = user.token;
    } else {
      config.headers.common["token"] = "";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    Vue.prototype.store.commit("LOADING", { loading: false });
    return response;
  },
  error => {
    Vue.prototype.store.commit("LOADING", { loading: false });
    let data = error.response.data;
    if (error.response.status == 401) {
      Vue.prototype.router.push({
        name: "login"
      });
    }
    if (error.response.status == 500) {
      if (error.response.data.code != "999999") {
        Vue.prototype.$message.error(data.msg);
      }
      if (!error.response.data) {
        Vue.prototype.message.error("服务器错误");
      }
    }
    return Promise.reject(error);
  }
);

export class axiosHttp {
  get(url, params = {}) {
    return axios.get(url, { params: params }).then(res => res.data);
  }
  post(url, params = {}) {
    return axios.post(url, params).then(res => res.data);
  }
}

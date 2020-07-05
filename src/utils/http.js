import Vue from "vue";
import axios from "axios";

axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status !== 200) {
      Vue.prototype.$message.error("服务器错误");
    }

    if (error.response.data.code) {
      Vue.prototype.$message.error(error.response.data.msg);
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
  delete(url, params = {}) {
    return axios.delete(url, params).then(res => res.data);
  }
  put(url, params = {}) {
    return axios.put(url, params).then(res => res.data);
  }
}

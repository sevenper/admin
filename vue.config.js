module.exports = {
  devServer: {
    port: 7070,
    open: true,
    proxy: {
      "/api": {
        target: "http://192.168.0.102:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "/"
        }
      }
    }
  }
};

const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://localhost:3001",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};

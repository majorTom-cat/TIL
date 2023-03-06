const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://openapi.naver.com/v1/search/blog.json",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

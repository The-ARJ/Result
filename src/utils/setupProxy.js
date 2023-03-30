const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/marks/my-marks',{
    target:'https://api.schoolworkspro.com',
    changeOrigin:true
  }))
};

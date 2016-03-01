var config = {
  "development": {
    //服务器接口
    "server_port": 3001,
    //静态资源地址
    //"static": "http://127.0.0.1:4001/"
    "static": "/"
  },
  "production": {
    "server_port": 3000,
    "static": "/"
  }
};
module.exports = config;


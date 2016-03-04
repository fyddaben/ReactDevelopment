# ReactDevelopment

> 用webpack + webpack-dev-server 配置一个react开发环境

## 特点

- 开发环境，HMR，不需要生成压缩文件，全部放在缓存中，编译速度快
- 线上环境，构建过程，`npm run build`构建前端代码,`npm run buildServer`进行服务端重启
- 利用webpack，灵活配置入口文件，而不是单一指定 
- `express` 作为模板渲染服务，`webpack-dev-server`作为静态资源服务
- css 文件单独生成，不和js放在一起
- 生成的文件夹，可以区分css, js
- 模板采用后端渲染的情况下，利用`Hash`改变文件名字

## 操作流程

### 开发环境

```
 npm run devServer
```
> 启动后台express服务器，webpack-dev-server静态资源服务器，并开启HMR。监听文件改动(只对jsx有效)

### 线上

```
npm run build && npm run server

```
> 首先构建前端代码，然后开启express服务

如果是第二次发布
```
npm run build && npm run reStartServer 

```


## ToDoList

- 使用`Hash`作为资源名称 (done)
- 使用`PM2` 进行服务启动，管理，利用json文件进行管理(done)
- 学习react，采用code spling的方法，进行操作
- 学习利用`Jenkins` 快速搭建部署线上环境

## 学习文章链接

[解决后端引用，改变Hash文件名的问题](http://react-china.org/t/webpack/2658/10)


[package.json文件 -- JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/nodejs/packagejson.html)


[深入了解 Webpack Plugins](http://rhadow.github.io/2015/05/30/webpack-loaders-and-plugins/)

[christianalfoni - The ultimate webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)

[深入浅出React（二）：React开发神器Webpack](http://www.infoq.com/cn/articles/react-and-webpack)


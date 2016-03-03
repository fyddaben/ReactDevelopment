# ReactDevelopment

> 用webpack + webpack-dev-server 配置一个react开发环境

## 特点

- 开发环境，HMR，不需要生成压缩文件，全部放在缓存中，编译速度快
- 线上环境，构建过程，`npm run build`构建前端代码,`npm run buildServer`进行服务端重启
- 利用webpack，灵活配置入口文件，而不是单一指定 
- `express` 作为模板渲染服务，`webpack-dev-server`作为静态资源服务
- css 文件单独生成，不和js放在一起
- 生成的文件夹，可以区分css, js


## ToDoList

- 使用`Hash`作为资源名称 
- 使用`PM2` 进行服务启动，管理，利用json文件进行管理

### 1. 安装webpack、webpack-cli

下载基本 webpack 配置所需第三方包：

> webpack：用于编译 JavaScript 模块
>
> webpack-cli：用于在命令行中运行 webpack
>
> webpack-dev-serve：可以在本地起一个 http 服务
>
> webpack-merge：用于合并webpack公共配置
>
> html-webpack-plugin：用于打包html文件

```json
// package.json
"devDependencies": {
  "html-webpack-plugin": "^5.5.0",
  "webpack": "^5.64.2",
  "webpack-cli": "^4.9.1",
  "webpack-dev-server": "^4.5.0",
  "webpack-merge": "^5.8.0"
},
```



添加html模板文件和webpack入口文件

![envconf1](D:\garfield\study\junior\Tecent-Front-End\3\Tencent-Front-End-G1\docs\assets\envconf1.png)

配置common模块：

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { PROJECT_PATH } = require('./PATH')

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, './src/index.js')
  },
  plugins: [
  	new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html'),
    }),
  ]
}
```

配置dev模块：

```js
const {merge} = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT } = require('./PATH');

module.exports = merge(common, {
  mode: 'development',
  devtool:'cheap-module-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    compress: true,               
    open: true,                   
    hot: true,         
  },
})
```

配置prod模块：

```js
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const { PROJECT_PATH } = require('./PATH')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(PROJECT_PATH, './dist')
  },
})
```


## 项目目录说明

```wiki
|-- Root
    |-- .babelrc					// babel config
    |-- .gitignore					// git ignore
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- docs						// documents
    |-- public						// index.html
    |-- scripts						// webpack config
    |-- src							// code
    |-- tsconfig.json				// typescript config
```

项目根目录下创建三个主要文件夹：

- `public`：用于存放项目的静态资源
- `scripts` ：用于存放 webpack 的配置文件
- `src` ：用于存放项目的代码文件



为了区分开 webpack的开发和生产环境，因此需要两套配置文件，这两套配置有很多地方是共通的，为了代码优雅，可以使用第三方包 `webpack-merge` 来将公共配置分别导入两套文件，因此需要在 `scripts` 目录下创建三个文件：

- `webpack.common.js`：用于编写公共配置
- `webpack.dev.js`：用于编写开发环境配置
- `webpack.prod.js`：用于编写生产环境配置
- `PATH.js`：目录变量



### html-webpack-plugin

`html-webpack-plugin` 的作用是：当使用 `webpack`打包时，创建一个 `html` 文件，并把 `webpack` 打包后的静态文件自动插入到这个 `html` 文件当中。

```sh
npm install html-webpack-plugin --save-dev
```

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
plugins:[
  new HtmlWebpackPlugin()
],
```



# 配置css

### **css相关**

> style-loader：将 js 文件中引入的 css 代码插入到 html 模板文件，使网页可以正常展示样式
>
> mini-css-extract-plugin：和 style-loader 功能一样，只是打包后会单独生成 css 文件而非直接写在 html 文件中，用于生产环境，开发环境不需要另外生成文件使用 style-loader 即可
>
> css-loader：令 js 可以通过 import 或者 require 等命令导入 css 代码

```sh
npm install style-loader -D
npm install mini-css-extract-plugin -D
npm install css-loader -D
```

配置开发环境

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
```

配置生产环境

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
  ],
}, 
plugins: [new MiniCssExtractPlugin()],
```



### **兼容相关**

> postcss-loader：配合插件去转换css
>
> postcss-preset-env：将最新的 css 语法转换为目标环境的浏览器能够理解的语法

```sh
npm install postcss-loader -D
npm install postcss-preset-env -D
```

开发一般在chrome上开发，不会有太多的兼容问题，因此只需要在生产环境中配置即可。

```js
// webpack.prod.js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
              ],
            ],
          },
        },
      }],
    },
  ],
},
target: 'browserslist',
```

```json
// package.json
"browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
]
```



### **预处理器less**

> `less`：为 less-loader 提供依赖
>
> `less-loader`：将 less 代码转换为 css 代码

```sh
npm install less -D
npm install less-loader -D
```

```js
// 将test中的 .css 改成 .less 即可
module: {
  rules: [
    {
      test: /\.less$/i,
      use: ['style-loader', 'css-loader', 'less-loader',
      ],
    },
  ],
},
```


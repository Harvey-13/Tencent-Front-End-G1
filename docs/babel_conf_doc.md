# 配置babel

> babel-loader：用于处理 ES6+ 语法，将其编译为浏览器可以执行的 js
>
> @babel/core：babel 所需依赖
>
> @babel/preset-env：是一组ES6转译的plugins，会根据设置的目标浏览器环境（browserslist），选择该环境不支持的新特性进行转译，这样就减少了不必要转译，增快打包速度
>
> @babel/plugin-transform-runtime：提供 ES6+ 的 api，如 es6 新的数组方法等
>
> @babel/runtime-corejs3：相当于 @babel/polyfill 的功能

```sh
npm install babel-loader -D
npm install @babel/core -D
npm install @babel/preset-env -D
npm install @babel/plugin-transform-runtime -D
npm install @babel/runtime-corejs3 -D
```

编辑.babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ]
}
```

编辑webpack.common.js

```js
rules: [
  {
    test: /\.(tsx?|js)$/,
    loader: 'babel-loader',
    options: { cacheDirectory: true },
    exclude: /node_modules/,
  },
]
```

> cacheDirectory：babel-loader 在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率，所以开启该配置将这些公共文件缓存起来，下次编译就会加快很多
>
> exclude：第三方包不需要进行转译，排除后可加快打包速度


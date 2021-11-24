# react 配置

> react：react核心依赖
>
> react-dom：负责处理web端的dom的渲染
>
> @types/react ：react 类型声明文件，用于 tsx
>
> @types/react-dom：react-dom 类型声明文件，用于 tsx
>
> @babel/preset-react ：用于让 babel 可以转译 jsx 语法

```sh
npm install @types/react -D
npm install @types/react-dom -D
npm install @babel/preset-react -D
```

配置.babelrc

```json
"presets": [
  [
    "@babel/preset-env",
    {
      "modules": false
    }
  ],
  "@babel/preset-react"
],
```


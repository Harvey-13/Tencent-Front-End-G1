# TS配置

> `typescript`：支持 ts
>
> `@babel/preset-typescript`：处理ts文件，原理是去掉ts的类型声明，然后再用其他 babel 插件进行编译

```sh
npm install typescript -D
npm install @babel/preset-typescript -D
```

编辑.babelrc

```json
"presets": [
  [
    "@babel/preset-env",
    {
      "modules": false
    }
  ],
  "@babel/preset-react",
  "@babel/preset-typescript"
],
```

运行 `npx tsc --init` 生成tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  
  "include": ["./src"],
  "exclude": ["./node_modules"]
}
```



打包类型检查

目前 webpack 打包时不会有类型检查信息（为了编译速度，babel 编译 ts 时直接将类型去除，并不会对 ts 的类型做检查），即使类型不正确终端也会显示打包成功，有误导性，为此添加上打包类型检查，下载第三方包：

> fork-ts-checker-webpack-plugin：ts 类型检查，让终端可以显示类型错误



入口更改：

```js
entry: path.resolve(PROJECT_PATH, './src/index.tsx'),
```


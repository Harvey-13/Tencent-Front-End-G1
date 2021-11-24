### 6. 优化

配置别名

```js
// webpack.common.js
resolve: {
  alias: {
    '@': path.resolve(PROJECT_PATH, './src'),
    '@comp': path.resolve(PROJECT_PATH, './src/components'),
    '@utils': path.resolve(PROJECT_PATH, './src/utils'),
    '@view': path.resolve(PROJECT_PATH, './src/view'),
    '@router': path.resolve(PROJECT_PATH, './src/router'),
    '@store': path.resolve(PROJECT_PATH, './src/store'),
  }
},
    
// tscongif.json
"baseUrl": "./",                          // 根路径
"paths": {								  // 路径映射，与 baseUrl 关联
  "@*": ["src/*"],
  "@comp*": ["src/components/*"],
  "@utils*": ["src/utils/*"]
},
```

配置文件后缀名

```json
resolve: {
  extensions: ['.tsx', '.ts', '.js', '.json'],
}
```


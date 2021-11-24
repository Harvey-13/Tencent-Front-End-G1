## 代码规范 lint 配置



### 1. ESlint

安装依赖

```sh
npm i -D eslint babel-eslint eslint-webpack-plugin eslint-plugin-jsx-control-statements
npm i -D eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```



编辑.eslintrc

```js
{
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "jsx-control-statements/jsx-control-statements": true // 能够在jsx中使用if，需要配合另外的babel插件使用
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended" // 需要另外配合babel插件使用
  ],
  "settings": {
    "react": {
      "version": "detect" // 自动读取已安装的react版本
    }
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "jsx-control-statements"
  ]
}
```

编辑webpack.common.js

```js
module: {
    plugins: [
      .......
      new ESLintPlugin()
    ],
}
```



### 2. prettier

```sh
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

配置.prettierrc

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false, 
  "singleQuote": true,
  "semi": true,
  "trailingComma": "none", 
  "bracketSpacing": true
}
```

修改.eslintrc

```json
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "react", "jsx-control-statements", "prettier"]
```



### 3. lint staged 和 husky

```sh
npm i -D lint-staged
npm install husky -D
```

修改package.json

```json
"scripts": {
  "dev": "webpack-dev-server --config ./scripts/webpack.dev.js",
  "build": "webpack --config ./scripts/webpack.prod.js",
  "prepare": "husky install",
  "lint-staged": "lint-staged --allow-empty"
},
```

run :

```sh
npm run prepare
npx husky add .husky/pre-commit "npm run lint-staged"
```



### 4. style lint

```sh
npm install stylelint --save-dev
npm install stylelint-webpack-plugin --save-dev
npm install stylelint stylelint-config-standard -D
npm install stylelint-config-rational-order -D
npm install stylelint-prettier -D
npm install stylelint-config-prettier -D
```

webpack配置：

```js
plugins: [
  ......,
  new StylelintPlugin({
    files: '../src/**/*.less',
    failOnError: false,
    format: 'less',
    fix: true, // 修复不规范的样式代码
    syntax: 'less'
  })
],
```

stylelintrc.js

```js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-prettier/recommended'],
  rules: {
    'block-no-empty': true, // 禁止出现空块
    'declaration-empty-line-before': 'never', // 要求或禁止在声明语句之前有空行。
    'declaration-block-no-duplicate-properties': true, // 在声明的块中中禁止出现重复的属性
    'declaration-block-no-redundant-longhand-properties': true, // 禁止使用可以缩写却不缩写的属性。
    'shorthand-property-no-redundant-values': true, // 禁止在简写属性中使用冗余值。
    'function-url-quotes': 'always', // 要求或禁止 url 使用引号。
    'color-hex-length': 'short', // 指定十六进制颜色是否使用缩写
    'color-named': 'never', // 要求 (可能的情况下) 或 禁止使用命名的颜色
    'comment-no-empty': true, // 禁止空注释
    'font-family-name-quotes': 'always-unless-keyword', // 指定字体名称是否需要使用引号引起来 | 期待每一个不是关键字的字体名都使用引号引起来
    'font-weight-notation': 'numeric', // 要求使用数字或命名的 (可能的情况下) font-weight 值
    'property-no-vendor-prefix': true, // 禁止属性使用浏览器引擎前缀
    'value-no-vendor-prefix': true, // 禁止给值添加浏览器引擎前缀
    'selector-no-vendor-prefix': true, // 禁止使用浏览器引擎前缀
    'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后
  },
};
```

修改package.json

```json
"lint-staged": {
    "{src,test}/**/*.{js,jsx,ts,tsx,json,css,less}": [
      "prettier --write"
    ],
    "{src,test}/**/*.{js,ts,tsx}": [
      "eslint --fix"
    ],
    "src/**/*.{css,less}": [
      "stylelint --fix"
    ]
}
```



### 5. commit 规范

```sh
npm install -D commitizen @commitlint/config-conventional @commitlint/cli
npm install -D cz-conventional-changelog
```

package.json:

```json
{
    "scripts": {
    	"commit": "git cz",
    	"commitlint": "commitlint --config commitlint.config.js -e -V"
    },
    "config": {
        "commitizen": {
            "path": "node_modules/cz-conventional-changelog"
        }
    }
}
```

commitlint.config.js

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

run:

```sh
npx husky add .husky/commit-msg "npm run commitlint"
```


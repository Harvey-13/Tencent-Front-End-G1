module.exports = {
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
    "plugin:jsx-control-statements/recommended", // 需要另外配合babel插件使用
    "prettier" // 注意顺序
  ],
  "settings": {
    "react": {
      "version": "detect" // 自动读取已安装的react版本
    }
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "jsx-control-statements",
    "prettier" // 注意顺序
  ]
}
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion":6,
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    // 语句强制分号结尾
    // "semi": [1, "always"],
    "semi": 0,
    // 禁止在嵌套的块中出现变量声明或 function 声明
    "no-inner-declarations": 0,
    // 禁止未使用过的变量
    "no-unused-vars": [1, { "vars": "all", "args": "all", "ignoreRestSiblings": false }],
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 1,
  }
};
  
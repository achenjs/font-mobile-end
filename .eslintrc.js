// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jquery: true,
  },
  globals: {
    "$": false,
    "jquery": false,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    "no-plusplus": 1,
    "no-console": "off",       // 开启console调试
    "prefer-template": 'off',  // ESLint总是推荐用ES6的Template String来拼接字符串，而不能用+号，这个比较烦，毕竟残留代码比较多，所以，禁止掉！
    "guard-for-in": 0,
    "import/prefer-default-export": 0,        //  关闭默认导出
    "no-restricted-syntax": 0
  }
}

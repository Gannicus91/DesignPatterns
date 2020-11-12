module.exports = {
  'root': true,

  // лобальные переменные среды
  'env': {
    // глобальные переменные браузера
    'browser': true,
    // Глобальные переменные CommonJS и область видимости CommonJS (необходимо для WebPack)
    'commonjs': true,
    // включает синтаксис ES6 автоматически
    'es6': true,
  },

  'extends': [
    'eslint:recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],

  "plugins": [
    "@typescript-eslint"
  ],

  // настройки парсера кода
  'parserOptions': {
    // наш код в модулях - ECMAScript
    'sourceType': 'module',
    // ECMA 2017 (8)
    'ecmaVersion': 11,
    // указываем свой парсер (не стандартный) - Обертка вокруг анализатора Babel, которая делает его совместимым с ESLint
    'parser': 'babel-eslint'
  },

  // Переопределение конкретных правил
  // Каждое правило принимает тип оповещения о себе (2 = error, 1 = warn, 0 = off(не оповещать)) и непосрественно сами аргументы для правила
  // Подробней о всех правилах: https://eslint.org/docs/rules/
  'rules': {
    // Названия переменных в любом формате
    'camelcase': 0,

    // Согласованные окончания строк ("\n"(для LF))
    'linebreak-style': [
      'error',
      'unix',
    ],

    // Не добавляем пустую строчку в конце файла
    'eol-last': 0,

    // Только одинарные кавычки
    'quotes': [
      'error',
      'single',
    ],

    // Точка с запятой в конце (оповещать всегда как ошибку)
    'semi': [
      'error',
      'always',
    ],

    // Ставить запятую в списках в конце текущей строки
    'comma-style': [
      'error',
      'last',
    ],

    // Последовательное использование конечных запятых в литералах объекта и массива
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore',
    }],

    // Пробел между именем функции и открывающимися скобками
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],

    '@typescript-eslint/no-var-requires': 0,

    'no-new': 0,

    //Разрешает использование функции объектов
    'no-prototype-builtins': 0,
    //кавычки в объектах только при необходимости
    'quote-props':['error', 'as-needed'],

    //call the fucking error https://github.com/babel/babel-eslint/issues/530
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }],
    'template-curly-spacing': 'off'
  },
};

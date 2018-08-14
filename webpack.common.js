'use strict';

require('dotenv').config();

const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const webpackConfig = module.exports = {};

webpackConfig.entry = ['babel-polyfill', `${__dirname}/src/main.js`];

webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title:'React App',
    template: `${__dirname}/src/index.html`,
  }),
  new DefinePlugin({
    API_URL: JSON.stringify(process.env.API_URL),
    PRODUCTION: production,
  }),
];

webpackConfig.module = {};

webpackConfig.module.rules = [
  {
    test: /\.(png|gif|svg|jpg)$/,
    use: [ 'file-loader' ],
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env','stage-0','react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];

//I get an error that says:
//Html Webpack Plugin:
// Error: Child compilation failed:
// Entry module not found: Error: Can't resolve ' / Users / tamarushin / cf / 401n / 27 -for  ms - and - props / src / index.html' in ' / Users / tamarushin / cf / 401n / 27 - forms - and - props'  :
// Error: Can't resolve ' / Users / tamarushin / cf / 401n / 27 - forms - and - props / src / index.h  tml' in ' / Users / tamarushin / cf / 401n / 27 - forms - and - props'

//   - compiler.js: 79 childCompiler.runAsChild
//   [27 - forms - and - props] / [html - webpack - plugin] / lib / compiler.js: 79: 16

//     - Compiler.js: 296 compile
//     [27 - forms - and - props] / [webpack] / lib / Compiler.js: 296: 11

//       - Compiler.js: 553 hooks.afterCompile.callAsync.err
//       [27 - forms - and - props] / [webpack] / lib / Compiler.js: 553: 14


//         - Hook.js: 35 AsyncSeriesHook.lazyCompileHook[as _callAsync]
// [27 - forms - and - props] / [tapable] / lib / Hook.js: 35: 21

//   - Compiler.js: 550 compilation.seal.err
//   [27 - forms - and - props] / [webpack] / lib / Compiler.js: 550: 30


//     - Hook.js: 35 AsyncSeriesHook.lazyCompileHook[as _callAsync]
// [27 - forms - and - props] / [tapable] / lib / Hook.js: 35: 21

//   - Compilation.js: 1294 hooks.optimizeAssets.callAsync.err
//   [27 - forms - and - props] / [webpack] / lib / Compilation.js: 1294: 35 
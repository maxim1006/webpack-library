the consumer should be able to access the library in the following ways:

ES2015 module. i.e. import webpackNumbers from 'webpack-numbers'.
CommonJS module. i.e. require('webpack-numbers').
Global variable when included through script tag.

### babel-plugin-add-module-exports
concerts: 
export default 'foo'

into

'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'foo';

"use strict";
exports.__esModule = true;
function Vue(option) {
    console.log(option);
}
function initMixin(Vue) {
    console.log('initMixin');
}
initMixin(Vue);
exports["default"] = Vue;

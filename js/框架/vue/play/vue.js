function Vue(options) {
  this._init(options)
}

function initMixin(Vue) {
  Vue.prototype._init = function () {
    console.log('klkl')
  }
}

initMixin(Vue)

const vue = new Vue({});

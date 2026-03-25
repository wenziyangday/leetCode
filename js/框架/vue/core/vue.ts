function Vue(option) {
  console.log(option);
}

function initMixin(Vue) {
  console.log('initMixin');
}

initMixin(Vue);

export default Vue;

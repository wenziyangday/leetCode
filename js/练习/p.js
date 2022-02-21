/** 日期 */
const date = new Date();
console.log(+date)
console.log('年', date.getFullYear());
console.log('月', date.getMonth());
console.log('日', date.getDate());
console.log('时', date.getHours());
console.log('分', date.getMinutes());
console.log('秒', date.getSeconds());
console.log('周 中天', date.getDay());

/** 获取数组中最大值 */
const arr = [1, 100, 10, 40, 30];
console.log('最大值', Math.max(...arr));
console.log('最大值', Math.max.apply(null, arr));
console.log('最大值', Math.max.call(null, ...arr));

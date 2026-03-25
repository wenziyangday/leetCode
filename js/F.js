function F1() {

}

console.log(F1.constructor === Object.constructor, Object.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);


const str = '/monitor/druid'
const arr = str.split('/')
const bb = arr.slice(1).map((x, index) => {
  return arr.slice(0, index)?.reduce((a, b) => a + '/' + b)
})
console.log(bb, 'bb')

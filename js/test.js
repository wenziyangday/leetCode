// const a = [{
//   ratio: 0.0008,
//   name: '123'
// }, {
//   ratio: 0.98,
//   name: '123'
// }, {
//   ratio: 0.28,
//   name: '123'
// }, {
//   ratio: 0.09,
//   name: '123'
// }]
//
// const aa = a?.sort((a, b) => b.ratio - a.ratio)
//   ?.map((_x) => ({
//     ..._x,
//     ratio: Number((_x?.ratio * 100)?.toFixed(0)),
//   }))
//   ?.filter((_x) => _x?.ratio > 0)
//   ?.slice(0, 10);
// console.log(aa, 'aa');
//
// const aaa = {rental: 12, energy: 12, wages: 12, socialSecurity: 12};
// const sum = Object.entries(aaa).reduce((a, b) => a + b[1], 0);
// console.log(sum)
//
// const str = '#FAD678'
// console.log(str.substr(1, 2), parseInt(str.substr(1, 2), 16));
// console.log(str.substr(3, 2), parseInt(str.substr(3, 2), 16));
// console.log(str.substr(5, 2), parseInt(str.substr(5, 2), 16));

var obj = {
  fnA() {
    console.log(this);
  },
  fnB: ()=> {
    console.log(this);
  }
}

obj.fnA();
obj.fnB();

const {fnA, fnB} = obj;
fnA();
fnB();


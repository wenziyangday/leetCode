const a = [{
  ratio: 0.0008,
  name: '123'
}, {
  ratio: 0.98,
  name: '123'
}, {
  ratio: 0.28,
  name: '123'
}, {
  ratio: 0.09,
  name: '123'
}]

const aa = a?.sort((a, b) => b.ratio - a.ratio)
  ?.map((_x) => ({
    ..._x,
    ratio: Number((_x?.ratio * 100)?.toFixed(0)),
  }))
  ?.filter((_x) => _x?.ratio > 0)
  ?.slice(0, 10);
console.log(aa, 'aa');

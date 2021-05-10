const a = {name: '张三', age: 100}

const b = a;

console.log(b);
b.name = 'lisa';
console.log(a, b);

let c = {};
Object.keys(a).forEach(x => {
  c[x] = a[x];
});

console.log(c);
c.name = 'alpha';
console.log(c, a, b);


function deepClone(target) {
  if (typeof target !== 'object') return target;
  if (target === null) return target;
  let deep = Array.isArray(target) ? [] : {};

  Object.keys(target).forEach(x => {
    deep[x] = target[x];
  });

  return deep;
}
let aaa = deepClone(a);
console.log(aaa);
a.name = 'beta';
console.log(aaa, a);


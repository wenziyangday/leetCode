function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

let hw = helloWorldGenerator();
console.log(hw.next(), 'hw');
console.log(hw.next(), 'hw');
console.log(hw.next(), 'hw');
console.log(hw.next(), 'hw');

// console.log(hw[Symbol.iterator]() = hw);

const myObj = {};
myObj[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
}

console.log([...myObj]);


function* f() {
  for (let i = 0; true; i++) {
    let reset = yield i;
    if (reset) {
      i = -1;
    }
  }
}

let g = f();

console.log(g.next());
console.log(g.next());
console.log(g.next(true));
// g.next() // { value: 0, done: false }
// g.next() // { value: 1, done: false }
// g.next(true) // { value: 0, done: false }

/** 给原生对象添加 Iterator 接口 这样就能使用for of 了 */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);
  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = {first: 'Jane', last: 'Doe'};
for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

for (let a in jane) {
  console.log(a);
}

/** flat 多维数组 */
const arrIndexes = [1, [2], 3, [4, [5], [6, [7, 8, [9, 10, 11, [12, [13, [14]]]]]]]];

function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

console.log([...iterTree(arrIndexes)]);

for (const iterTreeElement of iterTree(arrIndexes)) {
  console.log(iterTreeElement);
}

/** 遍历完全二叉树 */
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

function* inOrder(t) {
  if (t) {
    yield* inOrder(t.left);
    yield t.label;
    yield* inOrder(t.right);
  }
}

// 生成二叉树
function make(arr) {
  if (arr.length === 1) return new Tree(null, arr[0], null);
  return new Tree(make(arr[0]), arr[1], make(arr[2]));
}

const tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

let result = [];
for (const inOrderElement of inOrder(tree)) {
  result.push(inOrderElement);
}

console.log(result);

/** 既拥有next方法，又同时能正常捕获this */
function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

const obj1 = {};
const newObj = F.call(obj1);
const newObj2 = F.call(F.prototype);

newObj.next();
newObj.next();
newObj.next();

newObj2.next();
newObj2.next();
newObj2.next();

console.log(obj1.a);
console.log(obj1.b);
console.log(obj1.c);

console.log(newObj2.a);
console.log(newObj2.b);
console.log(newObj2.c);

/** 异步操作同步化表达 */
function* loadUI() {
  console.log('我执行了', 1);
  yield 1;
  console.log('我等了一下，然后执行了', 2);
}

loadUI().next();
loadUI().next();
loadUI().next();
loadUI().next();







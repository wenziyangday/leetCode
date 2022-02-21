function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ? {
        value: array[nextIndex++],
        done: false
      } : {
        value: undefined,
        done: true
      }
    }
  }
}

const it = makeIterator(['a', 'b']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/** 通过Iterator实现链表--给一个对象添加Iterator */
function NodeChain(value) {
  this.value = value;
  this.next = null;
}

NodeChain.prototype[Symbol.iterator] = function () {
  const iterator = {next: next};

  let cur = this;
  console.log(this, 'this');

  function next() {
    if (cur) {
      const value = cur.value;
      cur = cur.next;
      return {
        done: false,
        value,
      }
    }
    return {done: true}
  }

  return iterator;
}

const one = new NodeChain(1);
const two = new NodeChain(2);
const three = new NodeChain(3);
const four = new NodeChain(4);
one.next = two;
two.next = three;
three.next = four;

for (let i of one) {
  console.log(i);
}

/** 给一个对象添加遍历器 */
let objIterator = {
  data: ['hello', 'world'],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next: function () {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false,
          };
        }

        return {
          value: undefined, done: true
        }
      }
    }
  }
}

console.log(objIterator[Symbol.iterator]().next());
console.log(objIterator[Symbol.iterator]().next());
console.log(objIterator[Symbol.iterator]().next());



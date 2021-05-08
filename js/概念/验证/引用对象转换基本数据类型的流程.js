let obj = {
  value: 100,

  // 优先级 低
  toString: function () {
    return 1000;
  },

  // 优先级 中
  valueOf: function () {
    return 1000;
  },

  // 优先级 高
  [Symbol.toPrimitive]: function () {
    return 10000;
  }
}

console.log(obj + 1);

// 让a == 1 && a == 2

let aaaa = {
  value: 0,
  valueOf() {
    this.value++;
    return this.value;
  }
}

console.log(aaaa == 1 && aaaa == 2);
console.log(aaaa === 1 && aaaa === 2, typeof aaaa);

/**
 * @description 正整数数组中，计算所有可能的 奇数长度 子数组的和
 * @param {number[]} arr
 * @return {number}
 * */

// 思路：
// 找出1 ~ arr.length 中的所有奇数
// 生成连续奇数个的子数组
// 将所有子数组的和求和
// 奇数：表示为2n + 1 也就是 n % 2 !== 0
// 截取数组 slice(begin, end) 开始位置 结束位置
// 数组求和 reduce(acc, curVal) acc 累加器，curVal 当前值
// 数组中的map(x => x); 返回一个新的数组，并不会改变之前的数组
// 数组new Array(n) 生成一个 指定长度的 且元素为空的数组 (要想使用原型链上的方法：可以通过 new Array(len).fill(val) 或者 Array.from(new Array(len))) 这里面要注意的是：在遍历空数组的时候，是无法遍历得到下标以及元素的 也就是说当 数组原型链上的遍历或者查找方法会自动跳过empty 元素
// 有值的索引 原型链上的方法是可以调用的，而没有被赋值过得或者被delete 删除索引的值将不能使用
// 数组中 forEach 和 map 的 区别
// map 使用原则： 1。使用map返回的新数组 2. 有返回值  其他的可以使用 forEach 替代

function sumOddLengthSubArrays(arr) {
  let newComplexArr = [];
  let indexArr = new Array(arr.length).fill(arr.length).map((x, index) => index + 1).filter(x => x % 2 !== 0);

  indexArr.map(n => {
    for (let i = 0; i <= arr.length - n; i++) {
      newComplexArr.push(arr.slice(i, i + n));
    }
  });

  return newComplexArr.map(x => x.reduce((a, b) => a + b)).reduce((a, b) => a + b);
}

const sum = sumOddLengthSubArrays([1, 4, 2, 5, 3]);
console.log(sum);

new Array(10).forEach((x, index) => {
  console.log(index, x);
})

new Array(10).map((x, index) => {
  console.log(index, x);
})

Array.from(new Array(10)).forEach((x, index) => {
  console.log(x, index);
})

let arr = new Array(10);
console.log(arr, 'array');
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(i, arr[i]);
}

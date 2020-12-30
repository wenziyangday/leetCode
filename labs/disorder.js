// 乱序数组
function disorder(arr) {
  // 形成一个随机正负数
  return arr.sort(() => 0.5 - Math.random());
}

console.log(disorder([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 洗牌算法 ----> 等概率问题
function disorderShuffle(arr) {
  let len = arr.length, index;
  while (len) {
    index = Math.floor(Math.random() * len--);
    [arr[index], arr[len]] = [arr[len], arr[index]];
  }
  return arr;
}

console.log(disorderShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

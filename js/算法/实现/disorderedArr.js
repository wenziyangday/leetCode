/**
 * @description 乱序数组 sort 以及 sort 不是真实意义上的乱序，从而引入了一个新的算法
 * 洗牌算法：每次都是让当前数组状态的最后一个和 其前面数据的随机位置进行交换 从而形成一个乱序数组 （本质上就是一个等概率事件）
 * https://www.zhihu.com/question/68330851
 * https://new.qq.com/omn/20201208/20201208A0845600.html
 *
 * 概率事件：即每个元素在同一位置出现的概率是一样的 10 => 1/10 (已经出现的元素 此时概率是1) 接下来 9 => 1/9 * 9/10
 * 感觉就是除了已经出现的元素，其他的元素出现概率 相等
 * */

// 基础版（在某种场景下，并不是真实的完全乱序）
function disorderedArr(arr) {
  return arr.sort(() => .5 - Math.random());
}


// 完全版
const arr = shuffle2([1, 2, 3, 4, 5, 6, 7, 8]);
function shuffle2(arr) {
  let len = arr.length, index;
  let array = arr.slice();
  while (len) {
    index = Math.floor(Math.random() * len--);
    [array[index], array[len]] = [array[len], array[index]];
  }
  return array;
}

Array.prototype.shuffle = function () {
  let array = this, index;
  let len = array.length;
  while (len) {
    index = Math.floor(Math.random() * len--);
    [array[index], array[len]] = [array[len], array[index]];
  }
  return array;
}


console.log([1, 2, 3, 4, 5, 6].shuffle());

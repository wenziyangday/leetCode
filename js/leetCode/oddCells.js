/**
 * @description LeetCode 1252题 奇数值单元格的数组 n行数 m列数 初始化值是一个 n 行 m 列 的 值为0的 二维数组 indices 是一个坐标数组
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 * */

// 生成一个n、m 的矩阵(n行 m列的二维数组) 并且数组中的每个元素的初始值 为0
// 其实 本质上应该计算的就是 [[x1, y1], [x2, y2]] 对应的行列中的统计值
// 多维数组修改数组中的元素 并变更原数组 要注意 深浅拷贝问题
// splice 实现数组的增删改 并修改原数组  增：splice(index, 0, val) 删：splice(index, count) 改：splice(index, 1, val)
// slice 的 第一层深拷贝

function oddCells(n, m, indices) {
  let nms = new Array(n).fill(new Array(m).fill(0));
  indices.forEach((item) => {
    const [x, y] = item;

    // 行中 所有元素 +1
    nms[x] = nms[x].map(nItem => nItem + 1);

    // 列中 所有元素 +1
    for (let i = 0; i < nms.length; i++) {
      let arr = nms[i].slice();
      arr.splice(y, 1, arr[y] + 1);
      nms[i] = arr;
    }
  });

  return nms.flat(2).filter(item => item % 2 !== 0).length;
}

// let count = oddCells(2, 3, [[0,1],[1,1]]);
// let count = oddCells(2, 2, [[1,1],[0,0]]);
// let count = oddCells(5, 8, [[2,0]]);
const count = oddCells(28, 38, [[17,16],[26,31],[19,12],[22,24],[17,28],[23,21],[27,32],[23,27],[23,33],[18,7],[4,20],[0,31],[25,33],[5,22]]);


console.log(count);




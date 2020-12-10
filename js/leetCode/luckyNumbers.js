/**
 * @description leetCode 1380题 矩阵中的幸运数字 幸运数字：行中min， 列中max
 * @param {number[][]} matrix
 * @return {number[]}
 * */

// 行中最小的
// 列中最大的
// 矩阵A 和 它的转置矩阵
// 转置矩阵 m * n 转换成 n * m 白话文：行变成列，列变成行

function luckyNumbers(matrix) {
    const min = matrix.map(x => Math.min(...x));

    // 转置矩阵
    const transposeMatrix = matrix[0].map((x, index) =>
        matrix.map((y) => y[index])
    );
    const max = transposeMatrix.map(x => Math.max(...x));
    return max.filter(x => min.includes(x));
}

const luckyNums = luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]);
// const luckyNums = luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]);
console.log(luckyNums);



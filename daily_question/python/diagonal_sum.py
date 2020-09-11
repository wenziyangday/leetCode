# -*- coding: utf-8 -*-
from typing import List

# 题目说明：详细题解或者说明参见leetCode 1572.方阵对角线元素的和
# 方阵(二维数组)对角线的和，
'''
mat = [[1,2,3],
       [4,5,6],
       [7,8,9]
      ]
      
sum = 1 + 5 + 9 + 3 + 7   

提示：
n == mat.length == mat[i].length
1 <= n <= 100
1 <= mat[i][j] <= 100

方阵：n * n 矩阵 即 n * n 的二维数组

'''


def diagonal_sum(mat: List[List[int]]) -> int:
    mat_len = len(mat)
    temp = []
    index_temp = []

    for i in range(mat_len):
        temp_str = str(i) + ',' + str(i)
        temp_str_2 = str(mat_len - 1 - i) + ',' + str(i)
        if temp_str not in index_temp:
            temp.append(mat[i][i])
            index_temp.append(temp_str)
        if temp_str_2 not in index_temp:
            temp.append(mat[mat_len - 1 - i][i])
            index_temp.append(temp_str_2)

    return sum(temp)


'''
tips:
1.循环：正向循环、逆向循环range(len, -1, -1)
2.条件判断
3.比较两个字符相等 （可选方案：元组相等cmp(tuple1, tuple2)）
4. == 和 is 比较 ？
'''

if __name__ == '__main__':
    sums = diagonal_sum([[1, 2, 3],
                         [4, 5, 6],
                         [7, 8, 9]])
    print(sums)

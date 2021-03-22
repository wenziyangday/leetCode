# -*- coding: utf-8 -*-
from typing import List

# 1351. 统计有序矩阵中的负数

"""
给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。

请你统计并返回 grid 中 负数 的数目。
"""


def countNegatives(grid: List[List[int]]) -> int:
    summary = 0
    for item in grid:
        for sub in item:
            if sub < 0:
                summary += 1
    return summary


if __name__ == '__main__':
    print(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))

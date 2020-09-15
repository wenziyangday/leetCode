# -*- coding: utf-8 -*-
from typing import List

# 1299. 将每个元素替换为右侧最大元素
'''
给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
完成所有替换操作后，请你返回这个数组。
'''


def replaceElements(arr: List[int]) -> List[int]:
    backArr = []
    for i in range(len(arr)):
        if i != len(arr) - 1:
            backArr.append(max(arr[i + 1:]))
        else:
            backArr.append(-1)
    return backArr


if __name__ == '__main__':
    print(replaceElements([17, 18, 5, 4, 6, 1]))

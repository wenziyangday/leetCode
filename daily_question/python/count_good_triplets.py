# -*- coding: utf-8 -*-
from typing import List

# 1534. 统计好三元组
'''
给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。

如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
其中 |x| 表示 x 的绝对值。

返回 好三元组的数量 。
i < j < k
'''

'''
分析：
1. 循环范围 0 <= i < j < k < arr.length
'''


def count_good_triplets(arr: List[int], a: int, b: int, c: int) -> int:
    length = len(arr)
    triplet = []
    for i in range(length - 2):
        for j in range(i + 1, length - 1):
            for k in range(j + 1, length):
                if abs(arr[i] - arr[j]) <= a and abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                    triplet.append((arr[i], arr[j], arr[k]))
    print(triplet)
    return len(triplet)


'''
tips:
1. and、or 和 & 以及 | 的用法和区别
2. 多重循环 能不能 优化？
3. range()的用法
'''
if __name__ == '__main__':
    print(count_good_triplets([3, 0, 1, 1, 9, 7], 7, 2, 3))

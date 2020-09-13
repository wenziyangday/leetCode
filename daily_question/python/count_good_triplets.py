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
'''


def count_good_triplets(arr: List[int], a: int, b: int, c: int) -> int:
    print(arr)
    print(a)
    print(b)
    print(c)
    return 10

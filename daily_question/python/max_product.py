# -*- coding: utf-8 -*-
from typing import List

# 1464. 数组中两元素的最大乘积
'''
给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。

请你计算并返回该式的最大值。
'''


def maxProduct(nums: List[int]) -> int:
    newNums = [nums[i] - 1 for i in range(len(nums))]
    maxNum = max(newNums)
    indexMax = newNums.index(maxNum)
    secondMaxNum = max(newNums[0:indexMax] + newNums[indexMax + 1:])
    return maxNum * secondMaxNum


'''
tips:
1.列表推导式
2.子列表（切片法）左闭右开区间
eg. 
    a = [1, 2, 3, 4, 5]
    a[0:3] = [1, 2, 3]
    a[0:] = a = [1, 2, 3, 4, 5]
3.数组合并

'''

if __name__ == '__main__':
    print(maxProduct([3, 4, 5, 2]))

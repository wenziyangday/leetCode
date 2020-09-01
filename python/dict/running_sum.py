# -*- coding: utf-8 -*-
from typing import List


# 1480.一维数组动态求和
def running_sum(nums: List[int]) -> List[int]:
    sum_val = []
    for i in range(len(nums)):
        sum_val.append(sum(nums[0:i + 1]))
    return sum_val


# tips:
# 1.强类型函数的写法
# 2.list（列表切片处理）
# 3.数字型数组求和sum() 的使用


if __name__ == '__main__':
    val = running_sum(nums=[1, 2, 3, 4, 5])
    print(val)

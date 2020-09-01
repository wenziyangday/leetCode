# -*- coding:utf-8 -*-
from typing import List


# 拥有糖果最多的孩子
def kids_with_candies(candies: List[int], extra_candies: int) -> List[bool]:
    max_value = max(candies)
    result_list = []
    for i in range(len(candies)):
        if candies[i] + extra_candies >= max_value:
            result_list.append(True)
        else:
            result_list.append(False)
    return result_list


# 第二种解法 列表推导式
def kids_with_candies_2(candies: List[int], extra_candies: int) -> List[bool]:
    return [True if i + extra_candies > max(candies) else False for i in candies]


if __name__ == '__main__':
    val = kids_with_candies_2(candies=[2, 3, 5, 1, 3], extra_candies=3)
    print(val)

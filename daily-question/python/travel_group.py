# -*- coding: utf-8 -*-
# 遍历生成满足条件的数字

# 功能描述：
# 遍历并打印0到100，
# 如果数字能被3整除，显示Fizz；
# 如果数字能被5整除，显示Buzz；
# 如果能同时被3和5整除，就显示FizzBuzz。
# 结果应该类似：
# 0,1,2，Fizz,
# 4，Buzz，
# 6……14，FizzBuzz，
# 16……


# 下面的是期望输出的结构
from typing import Dict

a = {
    'Fizz': [0, 3],
    'Buzz': [0, 5, 15],
    'FizzBuzz': [15, 45]
}


# tips:
# 1.强类型函数的写法 你可以先不管这种强类型写法
# 2.练习内容
# # 循环生成0~100
# # 条件判断
# # 如何写一个函数
# # 了解python 有几种数据类型
# # dict 添加元素
# # 数组添加元素

def travel_group() -> Dict[str, list]:
    back_dict = {
        'Fizz': [],
        'Buzz': [],
        'FizzBuzz': []
    }
    for i in range(0, 101):
        if i % 3 == 0:
            back_dict['Fizz'].append(i)
        if i % 5 == 0:
            back_dict['Buzz'].append(i)
        if i % 5 == 0 & i % 3 == 0:
            back_dict['FizzBuzz'].append(i)

    return back_dict


if __name__ == '__main__':
    dic = travel_group()
    print(dic)

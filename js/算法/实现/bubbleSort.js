/**
 * @param[] arr
 * @return[] orderArr
 * @desc 冒泡排序：比较相邻的两个元素，然后进行交换（大的上升或者小的上升）
 * 关键点：始终是两个相邻元素之间的比较（每一次比较都会获得当前序列中最大或者最小的那个元素）
 * 而且每次比较都会少一次
 * */

function bubbleSort(arr) {

    const len = arr.length;
    let i = 0;
    while (i < len - 1) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        i += 1;
    }

    return arr;
}

const a = [1, 2, 3, 4, 5, 6]

console.log(bubbleSort([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]));
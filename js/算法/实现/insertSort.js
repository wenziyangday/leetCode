/**
 * @param[] arr
 * @return[] arr
 * @desc 插入排序
 * */
function insertSort(arr) {
    let i = 0;
    const len = arr.length;
    while (i < len) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        i += 1;
    }


    return arr;
}

console.log(insertSort([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]));
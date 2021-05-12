/**
 * @param arr
 * @return sortArr
 * @desc 选择排序
 * */
function choseSort(arr) {


    let i = 0;
    const len = arr.length;
    while (i < len) {

        for (let j = 0; j < i; j += 1) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        i += 1;
    }
    return arr;
}

const arr = choseSort([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]);
console.log(arr);
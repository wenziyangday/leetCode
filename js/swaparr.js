function swapAdjacent(arr, i) {
	if (i < 0 || i >= arr.length - 1) {
		throw new Error('Invalid index for swapping adjacent elements');
	}
	[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

// 示例
const arr = [{name: 1}, {name: 2}, {name: 3}];
swapAdjacent(arr, 2); // 交换第0和第1个
console.log(arr); // [{name: 2}, {name: 1}, {name: 3}]

// swapAdjacent(arr, 1); // 交换第1和第2个
// console.log(arr); // [{name: 2}, {name: 3}, {name: 1}]

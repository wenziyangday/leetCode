function deduplicateByProperties(arr, props) {
	const seen = new Set();
	// 若 props 是字符串，转为数组方便统一处理
	const properties = Array.isArray(props) ? props : [props];

	return arr.filter(item => {
		// 生成唯一键：拼接指定属性的值（例如 "id|name"）
		const key = properties.map(prop => item[prop]).join('|');
		return seen.has(key) ? false : seen.add(key);
	});
}
function deduplicateByProperties(arr, props) {
	const seen = {};
	const properties = Array.isArray(props) ? props : [props];

	return arr.reduce((result, item) => {
		const key = properties.map(prop => item[prop]).join('|');
		if (!seen[key]) {
			seen[key] = true;
			result.push(item);
		}
		return result;
	}, []);
}
// 示例用法
const data = [
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 25 },
	{ id: 1, name: 'Alice', age: 28 }, // 与第一个对象的 id 和 name 相同
	{ id: 2, name: 'Charlie', age: 25 }
];

// 根据 id 去重
console.log(deduplicateByProperties(data, 'id'));
// 输出：[{id:1, ...}, {id:2, ...}]

// 根据 id 和 name 去重
console.log(deduplicateByProperties(data, ['id', 'name']));
// 输出：保留前三个对象中的第一个和第四个（因为第四个的 id+name 不同）



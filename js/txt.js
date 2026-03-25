// JavaScript实现代码
function markLatestDate(data) {
	// 将日期字符串转换为时间戳
	const timestamps = data.map(item => new Date(item.beginDate_old).getTime());

	// 找到最新的时间戳
	const latestTimestamp = Math.max(...timestamps);

	// 创建结果数组，保持原顺序
	return data.map(item => {
		const currentTimestamp = new Date(item.beginDate_old).getTime();
		return {
			...item,

			idnewworkhis: currentTimestamp === latestTimestamp ? '最新' : '否'
		};
	});
}

// 示例数据
const inputData = [
	{a: '2022-10-03', b: ''},
	{a: '2022-10-01', b: ''},
	{a: '2022-10-04', b: ''}
];

// 处理数据
const result = markLatestDate(inputData);

console.log(result);

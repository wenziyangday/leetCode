/**
 * 日期加年（支持数字和字符串格式的年数）
 * 规则：2月29日 + 1年 -> 2月28日 (不顺延)
 * @param {string} dateStr - 日期字符串 "2024-02-29"
 * @param {number|string} years - 年数，支持 1, "1", "-2"
 */
function addYearsStrict(dateStr, years) {
	const date = new Date(dateStr);

	// 【关键步骤】强制转换为数字
	// 防止传入 "1" 时发生字符串拼接 (2024 + "1" = 20241)
	const yearsNum = Number(years);

	// 简单校验
	if (isNaN(yearsNum)) {
		console.error("年份参数错误");
		return dateStr;
	}

	// 1. 记住原来的月份
	const oldMonth = date.getMonth();

	// 2. 增加年份 (使用转换后的数字)
	date.setFullYear(date.getFullYear() + yearsNum);

	// 3. 检查月份是否跑偏 (处理闰年 2.29 -> 3.1 的情况)
	if (date.getMonth() !== oldMonth) {
		date.setDate(0); // 回退到上个月月底 (即2月28日)
	}

	// 4. 格式化输出
	const y = date.getFullYear();
	const m = (date.getMonth() + 1).toString().padStart(2, '0');
	const d = date.getDate().toString().padStart(2, '0');

	return `${y}-${m}-${d}`;
}

// --- 测试用例 ---

// 测试 1: 传入数字字符串 "1"
console.log(addYearsStrict('2023-01-01', "1"));
// 输出: "2024-01-01" (成功避免了变成 20231年)

// 测试 2: 传入负数字符串 "-1"
console.log(addYearsStrict('2023-01-01', "-1"));
// 输出: "2022-01-01"

// 测试 3: 闰年边界 + 字符串 "1"
console.log(addYearsStrict('2024-02-29', "1"));
// 输出: "2025-02-28" (逻辑依然正确)

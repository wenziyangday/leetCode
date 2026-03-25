const arr = [
	"等于\n=",
	"不等于\n!=",
	"等于任意一个\nin(......)",
	"不等于任意一个\nnot in (......)",
	"包含\nlike %...%",
	"不包含\nnot like",
	"包含任意一个\nlike %...% or%...%",
	"不包含任意一个\nnot like %...% and%...%",
	"大于\n>",
	"大于等于\n≥",
	"小于\n<",
	"小于等于\n≤",
	"介于范围\nbetween",
	"介于范围外\nnotBetween",
	"不为空\nnot null",
	"为空\nnull",
	"为真\nis true",
	"为假\nis false"
];

console.log(arr.map(x => {
	return {
		label: x.split('\n')[0],
		value: x.split('\n')[1]
	}
}));

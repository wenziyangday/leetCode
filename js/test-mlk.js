const aa = [
	"",
	"",
	"",
	"",
	{
		"DEF_NAME": "补签卡",
		"def_id_": "1859847054419931138"
	},
	{
		"DEF_NAME": "补签卡",
		"def_id_": "1859847054419931138"
	},
	{
		"DEF_NAME": "正式员工数据采集",
		"def_id_": "1876183870508941313"
	}
];


// 去重处理
const seen = new Set();
const bbb = aa.filter(x => x?.text).filter(obj => {
	if (seen.has(obj.text)) return false;
	seen.add(obj.text);
	return true;
});

console.log(bbb);

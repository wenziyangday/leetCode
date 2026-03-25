// const aa = [{
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 100,
//   "parentId": 0,
//   "ancestors": "0",
//   "deptName": "若依科技",
//   "orderNum": 0,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 101,
//   "parentId": 100,
//   "ancestors": "0,100",
//   "deptName": "深圳总公司",
//   "orderNum": 1,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 102,
//   "parentId": 100,
//   "ancestors": "0,100",
//   "deptName": "长沙分公司",
//   "orderNum": 2,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 103,
//   "parentId": 101,
//   "ancestors": "0,100,101",
//   "deptName": "研发部门",
//   "orderNum": 1,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 104,
//   "parentId": 101,
//   "ancestors": "0,100,101",
//   "deptName": "市场部门",
//   "orderNum": 2,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 105,
//   "parentId": 101,
//   "ancestors": "0,100,101",
//   "deptName": "测试部门",
//   "orderNum": 3,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 106,
//   "parentId": 101,
//   "ancestors": "0,100,101",
//   "deptName": "财务部门",
//   "orderNum": 4,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 107,
//   "parentId": 101,
//   "ancestors": "0,100,101",
//   "deptName": "运维部门",
//   "orderNum": 5,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 108,
//   "parentId": 102,
//   "ancestors": "0,100,102",
//   "deptName": "市场部门",
//   "orderNum": 1,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }, {
//   "createBy": "admin",
//   "createTime": "2023-06-03 06:15:08",
//   "updateBy": null,
//   "updateTime": null,
//   "remark": null,
//   "deptId": 109,
//   "parentId": 102,
//   "ancestors": "0,100,102",
//   "deptName": "财务部门",
//   "orderNum": 2,
//   "leader": "若依",
//   "phone": "15888888888",
//   "email": "ry@qq.com",
//   "status": "0",
//   "delFlag": "0",
//   "parentName": null,
//   "children": []
// }]
//
// let arr = [];
//
// function treeIdPId(pId) {
//   for (let i = 0; i < aa.length; i++) {
//     if (aa[i].parentId === pId) {
//       treeIdPId(aa[i].deptId);
//     } else {
//       arr.push(aa[i])
//     }
//   }
// }
//
// treeIdPId(0);
// console.log(arr);

// 定义车牌号的各个部分对应的范围
const provinceCodes = [
  "京", "津", "沪", "渝", "冀", "豫", "云", "辽", "黑", "湘",
  "皖", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋",
  "蒙", "陕", "吉", "闽", "贵", "粤", "青", "藏", "川", "宁", "琼"
];
const letterCodes = [
  "A", "B", "C", "D", "E", "F", "G", "H", "J", "K",
  "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W",
  "X", "Y", "Z"
];
const numberCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// 生成随机车牌号
function generateRandomPlates() {
  // 随机选择省份
  const province = provinceCodes[Math.floor(Math.random() * provinceCodes.length)];

  // 随机选择第1个字母
  const firstLetter = letterCodes[Math.floor(Math.random() * letterCodes.length)];

  // 随机选择后5个字符（包括字母和数字）
  let code = "";
  for (let i = 0; i < 5; i++) {
    const randomCode = Math.random() < 0.5 ? letterCodes : numberCodes;
    code += randomCode[Math.floor(Math.random() * randomCode.length)];
  }

  return province + firstLetter + code;
}

// 示例使用：
console.log(generateRandomPlates());  // 输出随机生成的车牌号

function getRandomTime() {
  const start = new Date("2022-01-01 00:00:00");
  const end = new Date("2022-01-07 23:59:59");

  const randomTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  const hours = randomTime.getHours().toString().padStart(2, "0");
  const minutes = randomTime.getMinutes().toString().padStart(2, "0");
  const seconds = randomTime.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

// 示例：获取随机时间
const randomTime = getRandomTime();
console.log(randomTime);


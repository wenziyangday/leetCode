var getProperties = function (user, key) { return user[key]; };
var getUser = function (user) { return user.color; };
var getSex = function (user) { return user.sex; };
var getMajor = function (user) { return user.major; };
// 类型推断
var names = getUser({ color: 'red', sex: '男', major: '煜文' });
var sex = getSex({ color: 'red', sex: '男', major: '煜文' });
var major = getMajor({ color: 'red', sex: '男', major: '煜文' });
console.log(names, sex, major);
console.log(getProperties({ color: 'red', sex: '男', major: '煜文' }, 'sex'));
var res = {
    code: 200,
    message: '数据收集成功',
    father: '',
    mother: '',
    list: [{
            name: '张三',
            age: 100,
            major: undefined || null
        }],
    pageNum: 1,
    brother: 'asdsd'
};
// 2
var res2 = {
    code: 200,
    message: '数据收集成功',
    father: '',
    mother: '',
    list: [{
            name: '张三',
            age: 100,
            major: undefined || null
        }],
    pageNum: 1
};
// 3
var res3 = {
    code: 200,
    message: '数据收集成功',
    father: '',
    mother: '',
    list: [{
            name: '张三',
            age: 100,
            major: undefined || null
        }],
    pageNum: 1,
    study: ['1212', ['34']]
};
console.log(res.list);
var setRes = function (name) {
    console.log(name);
};
setRes('你你你', 12);
var setRe = function (name, age) {
    console.log(name, age);
};

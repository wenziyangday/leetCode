var rx = {
    x: 100
};
// error
// rx.x = 100;
// 可以进行整体替换
rx = {
    x: 10
};
console.log('局部readonly', rx.x);
var numX = {
    x: 100
};
// error
// numX = {}
// numX.x = 100;

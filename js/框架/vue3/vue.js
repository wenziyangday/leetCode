var fun = function (obj) {
    var _a;
    ;
    _a = [100, 200], obj.age = _a[0], obj.name = _a[1];
};
var obj = {};
fun(obj);
console.log(obj);

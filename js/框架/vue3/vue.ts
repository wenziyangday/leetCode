const fun = (obj) => {
  ;[obj.age, obj.name] = [100, 200]
}

const obj = {};
fun(obj)
console.log(obj)

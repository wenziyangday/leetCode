function deepClone(source, m) {
  m || (m = new WeakMap());
  let result = null;

  const isPrimitive = (val) => {
    return /Number|Boolean|String|Null|Undefined|Symbol|Function/.test(Object.prototype.toString.call(val));
  }

  if (isPrimitive(source)) {
    result = source
  } else if (Array.isArray(source)) {
    result = source.map(x => {
      return deepClone(x, m);
    })
  }
  // 处理引用类型
  else {
    if (m.has(source)) {
      result = m.get(source);
    } else {
      result = Object.create(null);
      m.set(source, result);

      Object.keys(source).forEach(_x => {
        const val = source[_x];
        result[_x] = deepClone(val, m);
      })
    }
  }

  return result;
}

var v = {
  name: '张三',
  age: [1, 2, 3, 4],
  m: v,
  p: {
    name: '张三', age: [1]
  }
}

const aa = deepClone(v);
console.log(aa);

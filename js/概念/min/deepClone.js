function deepClone(obj) {
  if (typeof obj === 'object') {
    let result = obj.constructor === Array ? [] : {};

    for (const objKey in obj) {
      result[objKey] = typeof obj[objKey] === 'object' ? deepClone(obj[objKey]) : obj[objKey];
    }

    return result;
  }

  return obj;
}


const arr = [12, 2, 100];
console.log(deepClone(arr));

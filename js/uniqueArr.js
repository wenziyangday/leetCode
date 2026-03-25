/**
 * @description 指定属性(多属性)的对象数组去重
 * @param {Array} arr - 对象数组
 * @param {Array|string} keys - 用于去重的属性，可以是单属性（字符串）或多属性（数组）
 * @returns {Array} 去重后的数组
 */
function uniqueObjArr(arr, keys) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  if (!keys || (typeof keys !== 'string' && !Array.isArray(keys))) return arr;

  const seen = new Set();

  return arr.filter(item => {
    // 生成唯一标识符
    const identifier = Array.isArray(keys)
      ? keys.map(key => getValueByPath(item, key)).join('|') // 多属性联合
      : getValueByPath(item, keys); // 单属性

    if (seen.has(identifier)) {
      return false;
    } else {
      seen.add(identifier);
      return true;
    }
  });
}

/**
 * @description 根据路径获取对象的值（支持深层属性）
 * @param {Object} obj - 对象
 * @param {string} path - 属性路径（如 "a.b.c"）
 * @returns {*} 属性值
 */
function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

// Example usage:
const data = [
  { id: 1, name: 'Alice', info: { age: 25 } },
  { id: 2, name: 'Bob', info: { age: 30 } },
  { id: 1, name: 'Alice', info: { age: 25 } },
  { id: 3, name: 'Charlie', info: { age: 35 } },
  { id: 2, name: 'Bob', info: { age: 36 } },
];

console.log(uniqueObjArr(data, 'id')); // 单属性去重
console.log(uniqueObjArr(data, ['id', 'name'])); // 多属性联合去重
console.log(uniqueObjArr(data, ['info.age'])); // 深层属性去重

/**
 * @description leetCode 面试题01.01题 判定字符是否唯一
 * @param {string} astr
 * @return {boolean}
 * */


// 判定字符是否唯一 es6 有一个特性可以将重复的字符串去除 唯一的话 长度一致 否则不唯一；
// Set 中的长度属性 是size

function isUnique(astr) {
    const strArr = astr.split('');
    return new Set(strArr).size === strArr.length;
}

// const bool = isUnique('leetcode');
const bool = isUnique('abc');
console.log(bool);
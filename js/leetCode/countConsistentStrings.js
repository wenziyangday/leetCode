/**
 * @description leetCode 1684题 统计一致字符串的数目
 * @param {string} allowed
 * @param {string []} words
 * @return {number}
 * */

function countConsistentStrings(allowed, words) {
  const _allowed = allowed.split('');
  return words.filter(word => {
    // 找到一个是 -1 的 就结束了
    return !word.split('').some(x => _allowed.indexOf(x) === -1);
  }).length;
}

// const countConsistentStringss = countConsistentStrings('ab', ["ad", "bd", "aaab", "baa", "badab"]);
// const countConsistentStringss = countConsistentStrings('abc', ["a", "b", "c", "ab", "ac", "bc", "abc"]);
const countConsistentStringss = countConsistentStrings('cad', ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]);
console.log(countConsistentStringss);

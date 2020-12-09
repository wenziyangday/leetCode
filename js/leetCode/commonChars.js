/**
 * @description LeetCode 1002题 查找常用字符
 * @param {string[]} A
 * @return {string[]}
 * */

// 有重复元素的数组求交集(关键点：重复元素 怎么处理， 已经比较过得然后移除)

// 什么情况下你需要使用 深拷贝：使用一个变量 同时又要在内部进行修改该变量

function commonChars(A) {
  let deepA = A.map(a => a.split(''));
  return deepA.reduce((a, b) => commonIn(a, b));
}


function commonIn(arr, target) {
  const newArr = target.slice();
  return arr?.filter((x) => {
    if (newArr.includes(x)) {
      newArr.splice(newArr.indexOf(x), 1);
      return x;
    }
  });
}

// commonIn(['c', 'o', 'o', 'l'], ['l', 'o', 'c', 'k']);
// console.log(commonIn(['c', 'o', 'o', 'l'], ['l', 'o', 'c', 'k']));


// let common = commonIn(['b', 'e', 'l', 'l', 'a'], ['l', 'a', 'b', 'e', 'l']);
// console.log(commonIn(common, ['r', 'o', 'l', 'l', 'e', 'r']));

// let char = commonChars(["bella", "label", "roller"]);
let char = commonChars(["cool", "lock", "cook"]);
console.log(char);

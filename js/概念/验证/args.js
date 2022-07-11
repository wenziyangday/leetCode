function argss(a, b, c, d) {
  console.log(arguments, typeof arguments, Object.prototype.toString.call(arguments));
  console.log(arguments.length, [...arguments]);
  console.log(arguments.callee, arguments.toString());
}


argss(1, 2, 3, 4);


const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((a) => {
  console.log(a);
})

let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
// let str = JSON.stringify(ary).replace(/\[/g, '').replace(/\]/g, '').split(',').map(x => Number(x));
// let str = JSON.stringify(ary);
// ary = str.replace(/(\[|\])/g, '').split(',')
// console.log(ary);


let result = [];

function ff(arr) {
  let i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      ff(arr[i]);
    } else {
      result.push(arr[i]);
    }

    i += 1;
  }
}

// ff(ary)
// console.log(result);


function flatten(arr) {

  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)

  }

  console.log(arr);
}

flatten(ary);


// let aaa = [];
// for (let i = 0; i < 10; i++) {
//   aaa = [].concat(...[1, 2, 3]);
//   console.log(aaa)
// }

let arr1 = [2, 3, 4, 5];

console.log(arr1.concat([1]));
console.log(arr1.concat(12));

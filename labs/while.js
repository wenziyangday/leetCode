// let result = Math.random();
//
// while (result < 1) {
//   console.log(result);
// }


// [min, max) Math.random() * (max - min) + min, max = 2, min = 1
console.log(Math.random() * (2 - 1) + 1);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// [min, max] Math.random() * (max + 1 - min) + min
function includeMM(min, max) {
  let result = Math.random() * (max + 1 - min) + min;
  while (result > max) {
    result = Math.random() * (max + 1 - min) + min;
  }

  console.log(result);
}

includeMM(1, 3);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// (min, max]
function includeMax(min, max) {
  let result = Math.random() * (max - min + 1) + min;
  while (result === min) {
    result = Math.random() * (max - min + 1) + min;
  }
  console.log(result);
}

includeMax(1, 3);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');





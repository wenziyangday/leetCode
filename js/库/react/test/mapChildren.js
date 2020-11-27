function mapChild() {
  let result = [];
  changeResult(result);

  return result;
}

function changeResult(result) {
  let arr = [1, 2, 3, 4]
  arr.forEach(x => {
    result.push(x);
  });

}

let ja = [1, 2, 3, 4, 5];

let a = ja.map(x => x * 3);

console.log(ja, a);
console.log(mapChild());

ja.forEach(function (value, index, array) {
  console.log(this, value);
}, [12])

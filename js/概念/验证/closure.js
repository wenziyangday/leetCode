let a = 1;

function aa() {
  console.log(a);
}


function f() {
  let bb = 100;

  return function () {
    bb ++;
    return bb;
  }
}

console.log(f()());

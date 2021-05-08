let a = 1;

function aa() {
  console.log(a);
}


function f() {
  let a = 100;

  return function () {
    a ++;
    return a;
  }
}

console.log(f()());

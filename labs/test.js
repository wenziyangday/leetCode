// if ([]) {
//   console.log(2);
// } else {
//   console.log(3);
// }


const aa = [1, 2, 3];

function log(a, b, c) {
  console.log(a, b, c);
}

let a = log.bind(null, ...aa);
a();

let modules = {
  x: 100,
  log: function (q) {
    console.log(this.x, q);
  }
}

const _log = modules.log.bind(null);
_log();

const _log1 = modules.log.bind(null, 1000);
_log1();

const _log2 = modules.log.bind({x: 10000}, 1000000);
_log2();


console.log('' == null);


console.log(Object.hasOwnProperty.call({zhang: 'kk', key: 'jkkj'}, 'zhang'))

function loo(a, b, c) {
  console.log(a, b, c);
}

loo.call(this, 1, 2, 4);

loo.apply(this, [1, 2, 3]);

loo.bind(this, 1, 2, 'bind')();



console.log('0000000000000000000000100000000'.length);

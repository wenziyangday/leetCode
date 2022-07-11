/** async 实现：将G函数和自动执行器 包装在一个函数中 */
function fn(args) {
  return spawn(function* () {
    console.log('lk')
  });
}

function spawn(gF) {
  return new Promise(function (resolve, reject) {
    const gen = gF();

    function step(nextF) {
      let next;

      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }

      Promise.resolve(next?.value).then(function (v) {
        step(function () {
          gen.next(v);
        })
      }, function (e) {
        step(function () {
          return gen.throw(e);
        })
      });
    }

    step(function () {
      return gen.next(undefined);
    })
  });
}

fn();


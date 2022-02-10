const _Counter = function () {
  let privateCounter = 0;
  const changeBy = (val) => {
    privateCounter += val;
  }

  return {
    increase: () => {
      changeBy(100);
    },
    decrement: () => {
      changeBy(-100);
    },
    value: () => {
      return privateCounter;
    }
  }
};

const Counter = (_Counter)();
const Counter2 = _Counter();

console.log('Counter origin value', Counter.value());

Counter.increase();
console.log('increase value', Counter.value());

Counter.decrement();
Counter.decrement();
console.log('decrement value', Counter.value());

console.log('Counter2 origin value', Counter2.value());





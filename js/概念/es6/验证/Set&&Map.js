console.log([...new Set([+0, -0, NaN, NaN])]);
console.log(+0 === -0, NaN === NaN);
console.log(Object.is(+0, -0), Object.is(NaN, NaN));
console.log([...new Set([JSON.stringify({a: "1"}), JSON.stringify({a: "1"})])])

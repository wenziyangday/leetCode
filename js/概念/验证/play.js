
console.log(1);
function test(person) {
  person.age = 26;
  console.log(2);

  person = {
    name: 'hxj',
    age: 18
  }
  console.log(3);

  return person;
}
console.log(4);

const p1 = {
  name: 'fyq',
  age: 19
}

console.log(5);


const p2 = test(p1);
console.log(6);

console.log(p1);
console.log(p2);




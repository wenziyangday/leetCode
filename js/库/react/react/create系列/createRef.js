function createRef() {
  const refObj = {
    current: null,
  }

  {
    Object.seal(refObj)
  }

  return refObj;
}


let obj = createRef();
console.log(obj);

obj.current = 'jkjk'
console.log(obj, '就看见');


let newObj = {
  name: '张三啊',
  say: function () {
    console.log(this.name);
  }
};

const anewObj = {
  name: '哇哈哈哈'
}

console.log(newObj);

newObj.age = 100;

console.log(newObj);

newObj.say.call(anewObj);

const a = {
  phone: "18101870205",
  password: "uknowjcc11",
  no: "341204199004031789",
  name: "张三"
}

console.log(JSON.stringify(a));


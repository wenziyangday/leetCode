console.log(this);

let obj = {
  a: function () {
    console.log(this);
  },
  val: 1000,
  b: () => {
    console.log(this);
  }
}

// 这种调用 此时this 指向 全局作用域
const func = obj.a;
func();

// 指向该对象
obj.a();

//
obj.b();



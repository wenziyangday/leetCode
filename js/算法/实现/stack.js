function Stack() {
  this.arr = [];
}

// 出栈
Stack.prototype.pop = function () {
  this.arr.pop();
}

// 入栈
Stack.prototype.push = function (item) {
  this.arr.push(item);
}

// 栈长
Stack.prototype.size = function () {
  return this.arr.length;
}

// 栈顶
Stack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
}

// 清空栈
Stack.prototype.clear = function () {
  this.arr = [];
}

// 链栈单元
function ItemLinkedStack(val) {
  this.val = val;
  this.next = null;
}

// 链栈
function LinkedStack() {
  this.length = 0;
  this.top = null;
}

// 入栈
LinkedStack.prototype.push = function (el) {
  const itemLinkedStack = new ItemLinkedStack(el);
  if (this.length > 0) {
    itemLinkedStack.next = this.top;
    this.top = itemLinkedStack;
    this.length += 1;
  } else {
    this.top = itemLinkedStack;
    this.length = 1;
  }
}

// 出栈
LinkedStack.prototype.pop = function () {
  const top = this.top;
  if (this.length > 0) {
    this.top = top.next;
    this.length -= 1;
  } else {
    return;
  }
}

// 栈顶元素
LinkedStack.prototype.top = function () {
  return this.top;
}

// 清空链栈
LinkedStack.prototype.clear = function () {
  this.top = null;
  this.length = 0;
}


const a = new LinkedStack();
a.push(10);
a.push(100);
a.push(1000);
a.push(10000);
a.push(100000);
a.push(1000000);
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();

console.log(a);




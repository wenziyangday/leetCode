function Queue() {
  this.arr = [];
}

Queue.prototype.push = function (el) {
  this.arr.push(el);
}

Queue.prototype.pop = function () {
  this.arr.splice(this.arr.length - 1, 1);
}

Queue.prototype.size = function () {
  return this.arr.length;
}

Queue.prototype.clear = function () {
  this.arr = [];
}

const queue = new Queue();

queue.push(1);
queue.push(10);
queue.push(100);
queue.push(1000);
queue.push(10000);
queue.push(100000);
queue.push(1000000);
queue.pop();

console.log(queue);

// 链队单元
function ItemLinkedQueue(el) {
  this.el = el;
  this.next = null;
}

function LinkedQueue() {
  this.top = null;
  this.length = 0;
}

// 入队
LinkedQueue.prototype.push = function (el) {
  const itemLinkedQueue = new ItemLinkedQueue(el);

  if (this.length > 0) {
    let follow = this.top;
    while (follow.next) {
      follow = follow.next;
    }

    follow.next = itemLinkedQueue;
    this.length += 1;

  } else {
    this.top = itemLinkedQueue;
    this.length = 1;
  }
}

// 出队：先进先出规则
LinkedQueue.prototype.pop = function () {
  if (this.length > 0) {
    const top = this.top;
    this.top = top.next;
    this.length -= 1;
  } else {
    return;
  }
}

// 清空队列
LinkedQueue.prototype.clear = function () {
  this.top = null;
  this.length = 0;
}

const linkedQueue = new LinkedQueue();
linkedQueue.push(1);
linkedQueue.push(10);
linkedQueue.push(100);
linkedQueue.push(1000);
linkedQueue.push(10000);
linkedQueue.push(100000);
linkedQueue.push(1000000);
linkedQueue.pop();
linkedQueue.pop();
linkedQueue.pop();
linkedQueue.pop();
linkedQueue.pop();
linkedQueue.pop();
linkedQueue.pop();
linkedQueue.pop();

console.log(linkedQueue);

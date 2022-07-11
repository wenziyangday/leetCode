// 单链表单元
const Ele = function (el) {
  this.el = el;
  this.next = null;
}

// 单链表
const linkList = function () {
  this.head = null;
  this.length = 0;
  this.append = append;
  this.headAppend = headAppend;
  this.insert = insert;
  this.find = find;
  this.deleteItem = deleteItem;
}

// 尾部追加
const append = function (el) {
  let node = new Ele(el);
  let tmp;

  if (!this.head) {
    this.head = node;
  } else {
    tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = node;
  }

  this.length += 1;
  return true;
}

// 头部追加
const headAppend = function (el) {
  const newNode = new Ele(el);
  newNode.next = this.head.next;
  this.head = newNode;
  this.length += 1;
}

// 查找
const find = function (el) {
  let curNode = this.head;

  while (curNode.el !== el) {
    curNode = curNode.next;
  }

  return curNode;
}

// 指定位置插入
const insert = function (position, el) {
  if (position >= 0 && position < this.length) {
    let node = new Ele(el);
    let tmp = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
      node.next = tmp;
      this.head = node;
    } else {
      while (index++ < position) {
        prev = tmp;
        tmp = tmp.next;
      }

      node.next = tmp;
      prev.next = node;
    }

    this.length += 1;
    return true;
  }

  return false;
}

/**
 * 删除单元
 * tips: 头部删除、尾部删除其next是个null
 * */
const deleteItem = function (el) {
  const newNode = new Ele(el);
  if (!this.head) return;
  let tmp = this.head;
  let prev;
  let next;

  if (this.head.el === newNode.el) {
    this.head = this.head.next;
  } else {
    while (true) {
      prev = tmp;
      next = tmp.next;
      if (!next) return;
      if (next.el === newNode.el) {
        prev.next = next.next;
        this.length -= 1;
      }
      tmp = tmp.next;
    }
  }
};

const ll = new linkList();
ll.append('A');
ll.append('B');
ll.append('C');
ll.append('D');
// ll.insert(0, 'E');
// ll.deleteItem('C');
ll.headAppend('M');
console.log(ll);


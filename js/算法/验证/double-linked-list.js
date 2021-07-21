/**
 * 双链表：增删改查关键点断开prev 和 next 然后再接回去
 * */
const Ele = function (el) {
  this.prev = null;
  this.el = el;
  this.next = null;
}

const LinkList = function () {
  this.head = null;
  this.length = 0;
  this.append = append;
  this.headAppend = headAppend;
  this.find = find;
  this.deleteItem = deleteItem;
  this.insertItem = insertItem;
}

// 尾插法
const append = function (el) {
  const newNode = new Ele(el);
  let tmp = this.head;
  if (!tmp) {
    this.head = newNode;
    this.length = 1;
  } else {
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = newNode;
    newNode.prev = tmp;
    this.length += 1;
  }

}

// 头插法
const headAppend = function (el) {
  const newNode = new Ele(el);
  if (!this.head) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.length += 1;
}

// 查找
const find = function (el) {
  if (!this.head) return false;
  let tmp = this.head;
  while (tmp) {
    if (tmp.el === el) {
      return true;
    }
    tmp = tmp.next;
  }

  return false;
}

// 删除指定元素
const deleteItem = function (el) {
  let flag = false;
  if (!this.head) return flag;
  let tmp = this.head;

  while (tmp) {
    if (tmp.el === el) {
      tmp.prev.next = tmp.next;
      tmp.next.prev = tmp.prev;
      this.length -= 1;
      flag = true;
    }
    tmp = tmp.next;
  }
  return flag;
}

// 在指定位置插入一个元素
const insertItem = function (pos, el) {
  if (!this.head) return;
  const newNode = new Ele(el);

  if (pos === 0) {
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return;
  }

  let i = 0;
  let tmp = this.head;
  while (tmp) {
    if (i === pos) {
      newNode.prev = tmp.prev;
      tmp.prev.next = newNode;
      newNode.next = tmp;
      tmp.prev = newNode;
      this.length += 1;
      return;
    }
    i += 1;
    tmp = tmp.next;
  }

}

const ll = new LinkList();

ll.append('A');
ll.append('B');
ll.append('C');
ll.append('D');
ll.headAppend('M');
const bools = ll.find('M');
console.log(bools);
const isDelete = ll.deleteItem('C');

ll.insertItem(0, 'G');

console.log(ll, isDelete);


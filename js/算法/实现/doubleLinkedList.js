function ItemDoubleLinkedList(el) {
  this.el = el;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.length = 0;
  this.tail = null;
}

// 尾插法
DoubleLinkedList.prototype.append = function (el) {
  const node = new ItemDoubleLinkedList(el);
  if (this.length > 0) {
    let head = this.head;
    while (head.next) {
      head = head.next;
    }
    head.next = node;
    node.prev = head;
    this.tail = node;
    this.length += 1;
  } else {
    this.head = node;
    this.tail = node;
    this.length += 1;
  }
}

// 头插法
DoubleLinkedList.prototype.ahead = function (el) {
  const node = new ItemDoubleLinkedList(el);

  if (this.length > 0) {
    let head = this.head;
    while (head.prev) {
      head = head.prev;
    }

    head.prev = node;
    node.next = head;
    this.head = node;
    this.length += 1;
  } else {
    this.head = node;
    this.tail = node;
    this.length += 1;
  }
}

// 删除指定的元素
DoubleLinkedList.prototype.deleteItem = function (el) {
  let head = this.head;
  let tail = this.tail;
  if (head.el === el) {
    this.head = head.next;
    head.prev = null;
    this.length -= 1;
    return true;
  }

  if (tail.el === el) {
    tail.prev.next = null;
    this.tail = tail.prev;
    this.length -= 1;
    return true;
  }

  do {
    if (head.el === el) {
      const cur = head;
      const prev = cur.prev;
      const next = cur.next;
      prev.next = next;
      next.prev = prev;
      this.length -= 1;
    }
  } while (head = head.next);
}

// const doubleLinkedList = new DoubleLinkedList();
// doubleLinkedList.append(1);
// doubleLinkedList.append(10);
// doubleLinkedList.append(100);
// doubleLinkedList.append(1000);
// doubleLinkedList.append(10000);
// doubleLinkedList.append(100000);

const _doubleLinkedList = new DoubleLinkedList();
_doubleLinkedList.ahead(2);
_doubleLinkedList.ahead(20);
_doubleLinkedList.ahead(200);
_doubleLinkedList.ahead(2000);
_doubleLinkedList.ahead(20000);
_doubleLinkedList.ahead(200000);

_doubleLinkedList.deleteItem(200000);

console.log(_doubleLinkedList);


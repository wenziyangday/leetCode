function ItemLinkedList(el) {
  this.el = el;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

// 尾插法
LinkedList.prototype.append = function (el) {
  const itemLinkedList = new ItemLinkedList(el);
  if (this.length > 0) {
    let head = this.head;

    while (head.next) {
      head = head.next;
    }
    head.next = itemLinkedList;
    this.length += 1;
  } else {
    this.head = itemLinkedList;
    this.length = 1;
  }
}

// 头插法
LinkedList.prototype.ahead = function (el) {
  const itemLinkedList = new ItemLinkedList(el);
  if (this.length > 0) {
    const head = this.head;
    itemLinkedList.next = head;
    this.head = itemLinkedList;
    this.length += 1;
  } else {
    this.head = itemLinkedList;
    this.length = 1;
  }
}

// 打印元素
LinkedList.prototype.log = function () {
  let head = this.head;

  do {
    console.log(head.el);
  } while ((head = head.next));
}

// 根据下标查找
LinkedList.prototype.findByIndex = function (index) {
  let i = 0;
  let head = this.head;
  do {
    if (i === index) {
      return head.el;
    }
  } while ((head = head.next) && (i += 1));
  return -1;
}

// 根据值进行查找
LinkedList.prototype.findByVal = function (val) {
  let head = this.head;
  do {
    if (head.el = val) {
      return true;
    }
  } while ((head = head.next));
  return false;
}

// 删除指定值
LinkedList.prototype.deleteByVal = function (val) {
  let head = this.head;
  let prev = head;
  // 表头
  if (val === head.el) {
    this.head = head.next;
    this.length -= 1;
  } else {
    while (prev && prev.next) {
      const cur = prev.next;
      if (cur.el === val) {
        prev.next = cur.next;
        this.length -= 1;
      }
      prev = prev.next;
    }
  }
}

// 指定位置后插入值
LinkedList.prototype.insert = function (index, val) {
  let head = this.head;
  let i = 0;
  const el = new ItemLinkedList(val);

  if (index < 0 || index > this.length - 1) throw('坐标溢出');

  do {
    if (i === index) {
      el.next = head.next;
      head.next = el;
      this.length += 1;
    }
    i += 1
  } while (head = head.next);
}

// 替换掉指定值
LinkedList.prototype.replace = function (target, val) {
  let head = this.head;
  const el = new ItemLinkedList(val);

  if (head.el === target) {
    el.next = head.next;
    this.head = el;
  } else {
    let prev = head;
    while (prev && prev.next) {
      const cur = prev.next;
      if (cur.el === target) {
        el.next = cur.next;
        prev.next = el;
      } else {
        prev = prev.next;
      }
    }
  }

}


const linkedList = new LinkedList();
const _linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(10);
linkedList.append(100);
linkedList.append(1000);
linkedList.append(10000);
linkedList.append(100000);
linkedList.append(1000000);


_linkedList.ahead(1);
_linkedList.ahead(10);
_linkedList.ahead(100);
_linkedList.ahead(1000);
_linkedList.ahead(10000);
_linkedList.ahead(100000);
_linkedList.ahead(1000000);

linkedList.log();
_linkedList.log();

console.log('___________________________________________');
console.log(linkedList, _linkedList);

linkedList.replace(1000000, '-100');
console.log(linkedList, _linkedList);




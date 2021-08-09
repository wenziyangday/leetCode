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

LinkedList.prototype.log = function () {
  let head = this.head;

  do {
    console.log(head.el);
    head = head.next;
  } while (head.next);

  console.log(head.el)
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

console.log(linkedList, _linkedList);


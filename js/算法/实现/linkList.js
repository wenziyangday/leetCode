function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.append = function (val) {
  const node = new Node(val);
  if (!this.head) this.head = node;
  let next = this.head.next;
  let tmp = this.head;
  while (next) {
    tmp = next.next;
    next = tmp.next;
  }
}
const linkList = new LinkedList();
linkList.append(10);

console.log(linkList);


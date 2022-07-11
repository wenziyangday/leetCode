// 这是一个二叉树
function TreeNode(el) {
  this.el = el;
  this.prev = null;
  this.next = null;
}

function Tree() {
  this.root = null;
}

Tree.prototype.append = function (el) {
  const node = new TreeNode(el);

  if (!this.root) {
    this.root = node;
  } else {
    appendNode(this.root, node);
  }
}

// 先序遍历
Tree.prototype.traverseNLR = function () {

}
// 中序遍历
Tree.prototype.traverseLNR = function () {

}
// 后序遍历
Tree.prototype.traverseLRN = function () {

}


const appendNode = function (node, newNode) {
  if (newNode.el < node.el) {
    if (!node.prev) node.prev = newNode;
    else appendNode(node.prev, newNode);
  } else {
    if (!node.next) node.next = newNode;
    else appendNode(node.next, newNode);
  }
}


const tree = new Tree();

tree.append(100);
tree.append(200);
tree.append(300);
tree.append(190);
tree.append(180);
tree.append(170);
tree.append(160);
tree.append(90);
tree.append(70);
tree.append(92);
tree.append(91);

console.log(tree);

function FiberNode(tag, key, pendingProps, mode) {
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;

  /** 真实dom节点存储 */
  this.stateNode = null;

  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoiziedProps = null;
  this.updateQueue = null;
  this.memoiziedState = null;
  this.dependencies = null;

  this.mode = mode;

  this.effectTag = 'NoEffect';
  this.nextEffect = null;
  this.firstEffect = null;
  this.lastEffect = null;

  this.lanes = 'NoLanes';
  this.childLanes = 'NoLanes';


  this.alternate = null;
}

const fiberNode = new FiberNode('div', null, 'pendIngProps', 'mode');
console.log(fiberNode);

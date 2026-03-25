interface TreeNode {
  id?: number;
  key?: string;
  name?: string;
  children?: TreeNode[];
  [key: string]: any; // Allow additional properties
}

interface FlattenTreeOptions {
  childrenKey?: string | string[]; // Support string or array of strings
  filter?: (node: TreeNode) => boolean;
  sort?: (a: TreeNode, b: TreeNode) => number;
  leafOnly?: boolean;
  includePath?: boolean;
  outputType?: 'array' | 'map';
  outputKey?: string;
}

type FlattenTreeResult = TreeNode[] | Record<string, TreeNode>;

function flattenTree(tree: TreeNode[], options: FlattenTreeOptions = {}): FlattenTreeResult {
  const {
    childrenKey = 'children',
    filter = () => true,
    sort = null,
    leafOnly = false,
    includePath = false,
    outputType = 'array',
    outputKey = 'id',
  } = options;

  const result: FlattenTreeResult = outputType === 'map' ? {} : [];
  const stack: { node: TreeNode; parent: TreeNode | null; path: TreeNode[] }[] = tree.map(node => ({
    node,
    parent: null,
    path: [],
  }));

  while (stack.length > 0) {
    const { node, parent, path } = stack.pop()!;
    if (!filter(node)) continue;

    const currentPath = includePath ? [...path, node] : [];
    const children = Array.isArray(childrenKey)
      ? childrenKey.reduce((acc, key) => acc.concat(node[key] || []), [] as TreeNode[])
      : node[childrenKey] || [];
    const isLeaf = children.length === 0;

    if (!leafOnly || isLeaf) {
      const flatNode: TreeNode = { ...node, parent };
      if (includePath) flatNode.path = currentPath;
      if (outputType === 'map') {
        const key = flatNode[outputKey];
        if (key !== undefined) {
          (result as Record<string, TreeNode>)[key] = flatNode;
        }
      } else {
        (result as TreeNode[]).push(flatNode);
      }
    }

    if (children.length > 0) {
      const sortedChildren = sort ? [...children].sort(sort) : children;
      for (let i = sortedChildren.length - 1; i >= 0; i--) {
        stack.push({ node: sortedChildren[i], parent: node, path: currentPath });
      }
    }
  }

  return result;
}

// Example usage:
const treeData: TreeNode[] = [
  {
    id: 1,
    key: 'A',
    name: 'Node 1',
    children: [
      { id: 2, key: 'B', name: 'Node 1.1' },
      { id: 3, key: 'C', name: 'Node 1.2', children: [{ id: 4, key: 'D', name: 'Node 1.2.1' }] },
    ],
  },
  {
    id: 5,
    key: 'E',
    name: 'Node 2',
    children: [{ id: 6, key: 'F', name: 'Node 2.1' }],
  },
];

const options: FlattenTreeOptions = {
  childrenKey: 'children',
  filter: node => node.id !== 3,
  sort: (a, b) => (a.name || '').localeCompare(b.name || ''),
  leafOnly: false,
  includePath: true,
};

console.log(flattenTree(treeData, options));

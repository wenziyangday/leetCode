/**
 * @description 扁平化tree
 * 1. 通过递归将树形结构转换为扁平化结构
 * 2. 每个节点包含其父节点的引用
 * 3. 支持自定义子节点属性名
 * 4. 支持过滤节点
 * 5. 支持排序节点
 * 6. 支持返回所有节点或仅返回叶子节点
 * 7. 支持返回节点的路径信息
 * 8. 支持返回值是数组还是属性 map
 *
 * @param {Array} tree - 树形结构数据
 * @param {Object} options - 配置选项
 * @param {Function} [options.filter] - 节点过滤函数 (注意: 将父级节点过滤掉, 其子节点也会被过滤掉)
 * @param {Function} [options.sort] - 节点排序函数
 * @param {boolean} [options.leafOnly=false] - 是否仅返回叶子节点 (注意：该属性在 filter 之后应用 => 即 受 filter 影响)
 * @param {boolean} [options.leafOnly=false] - 是否仅返回叶子节点
 * @param {boolean} [options.includePath=false] - 是否返回节点路径信息
 * @param {string} [options.outputType='array'] - 返回值类型 ('array' 或 'map')
 * @param {string} [options.outputKey='id'] - 用于 map 的键名
 * @returns {Array|Object} 扁平化后的节点数组或属性 map
 */
function flattenTree(tree, options = {}) {
  const {
    childrenKey = 'children',
    filter = () => true,
    sort = null,
    leafOnly = false,
    includePath = false,
    outputType = 'array', // 'array' or 'map'
    outputKey = 'id', // Key to use for map
  } = options;

  const result = outputType === 'map' ? {} : [];

  function traverse(node, parent = null, path = []) {
    // 过滤节点
    if (!filter(node)) return;

    // 构造当前节点的路径
    const currentPath = [...path, node];

    // 判断是否是叶子节点
    const isLeaf = !node[childrenKey] || node[childrenKey].length === 0;

    // 如果仅返回叶子节点，且当前节点不是叶子节点，则跳过
    if (!leafOnly || isLeaf) {
      const flatNode = { ...node, parent };
      if (includePath) {
        flatNode.path = currentPath;
      }
      if (outputType === 'map') {
        const key = flatNode[outputKey];
        if (key !== undefined) {
          result[key] = flatNode;
        }
      } else {
        result.push(flatNode);
      }
    }

    // 递归处理子节点
    if (node[childrenKey] && node[childrenKey].length > 0) {
      let children = [...node[childrenKey]];
      if (sort) {
        children = children.sort(sort);
      }
      children.forEach(child => traverse(child, node, currentPath));
    }
  }

  tree.forEach(node => traverse(node));
  return result;
}

// // Example usage:
// const treeData = [
//   {
//     id: 1,
//     key: 'A',
//     name: 'Node 1',
//     children: [
//       { id: 2, key: 'B', name: 'Node 1.1' },
//       { id: 3, key: 'C', name: 'Node 1.2', children: [{ id: 4, key: 'D', name: 'Node 1.2.1' }] },
//     ],
//   },
//   {
//     id: 5,
//     key: 'E',
//     name: 'Node 2',
//     children: [{ id: 6, key: 'F', name: 'Node 2.1' }],
//   },
// ];
//
// const options = {
// 	childrenKey: 'children',
// 	filter: node => node.id !== 3, // Exclude nodes with id 3
// 	sort: (a, b) => a.name.localeCompare(b.name), // Sort by name
// 	leafOnly: false,
// 	includePath: true,
// };
//
// console.log(flattenTree(treeData, options));
//
// const filterOptions = {
// 	filter: node => node.name !== 'Node 2', // Exclude nodes with id 3
// 	outputType: 'map', // Return as a map
// 	outputKey: 'name', // Use 'key' as the map key
// }
//
// console.log(flattenTree(treeData, filterOptions));



var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function flattenTree(tree, options) {
    if (options === void 0) { options = {}; }
    var _a = options.childrenKey, childrenKey = _a === void 0 ? 'children' : _a, _b = options.filter, filter = _b === void 0 ? function () { return true; } : _b, _c = options.sort, sort = _c === void 0 ? null : _c, _d = options.leafOnly, leafOnly = _d === void 0 ? false : _d, _e = options.includePath, includePath = _e === void 0 ? false : _e, _f = options.outputType, outputType = _f === void 0 ? 'array' : _f, _g = options.outputKey, outputKey = _g === void 0 ? 'id' : _g;
    var result = outputType === 'map' ? {} : [];
    var stack = tree.map(function (node) { return ({
        node: node,
        parent: null,
        path: []
    }); });
    var _loop_1 = function () {
        var _h = stack.pop(), node = _h.node, parent_1 = _h.parent, path = _h.path;
        if (!filter(node))
            return "continue";
        var currentPath = includePath ? __spreadArray(__spreadArray([], path), [node]) : [];
        var children = Array.isArray(childrenKey)
            ? childrenKey.reduce(function (acc, key) { return acc.concat(node[key] || []); }, [])
            : node[childrenKey] || [];
        var isLeaf = children.length === 0;
        if (!leafOnly || isLeaf) {
            var flatNode = __assign(__assign({}, node), { parent: parent_1 });
            if (includePath)
                flatNode.path = currentPath;
            if (outputType === 'map') {
                var key = flatNode[outputKey];
                if (key !== undefined) {
                    result[key] = flatNode;
                }
            }
            else {
                result.push(flatNode);
            }
        }
        if (children.length > 0) {
            var sortedChildren = sort ? __spreadArray([], children).sort(sort) : children;
            for (var i = sortedChildren.length - 1; i >= 0; i--) {
                stack.push({ node: sortedChildren[i], parent: node, path: currentPath });
            }
        }
    };
    while (stack.length > 0) {
        _loop_1();
    }
    return result;
}
// Example usage:
var treeData = [
    {
        id: 1,
        key: 'A',
        name: 'Node 1',
        children: [
            { id: 2, key: 'B', name: 'Node 1.1' },
            { id: 3, key: 'C', name: 'Node 1.2', children: [{ id: 4, key: 'D', name: 'Node 1.2.1' }] },
        ]
    },
    {
        id: 5,
        key: 'E',
        name: 'Node 2',
        children: [{ id: 6, key: 'F', name: 'Node 2.1' }]
    },
];
var options = {
    childrenKey: 'children',
    // filter: function (node) { return node.id !== 3; },
    // sort: function (a, b) { return (a.name || '').localeCompare(b.name || ''); },
    leafOnly: false,
    includePath: true
};
console.log(flattenTree(treeData, options));

// * bfs
const maxDepth = (root) => {
  if (!root) return 0;

  const queue = [root];
  let max = 1;

  while (queue.length) {
    const len = queue.length;

    // traverse level by level
    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      // traverse next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // after each level traversal, increment max depth by 1
    max++;
  }

  return max;
};
// * recursion
var maxDepth2 = function (root, depth = 0) {
  if (null == root) return depth;

  return Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1)
  );
};

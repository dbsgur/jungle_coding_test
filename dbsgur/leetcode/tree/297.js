function serialize(root) {
  if (!root) {
    return "";
  }

  function convert(node) {
    if (!node) {
      return undefined;
    }

    const data = {
      val: node.val,
      left: convert(node.left),
      right: convert(node.right),
    };

    return data;
  }

  const payload = convert(root);

  return JSON.stringify(payload);
}

function deserialize(data) {
  if (!data) {
    return null;
  }

  function parse(item) {
    const node = new TreeNode(item.val);

    if (item.left) {
      node.left = parse(item.left);
    }

    if (item.right) {
      node.right = parse(item.right);
    }

    return node;
  }

  const payload = JSON.parse(data);

  return parse(payload);
}

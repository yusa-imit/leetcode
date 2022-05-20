function buildTree(preorder, inorder) {
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  let p = (i = 0);
  const build = (stop) => {
    if (inorder[i] !== stop) {
      let root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
}

console.log(buildTree([1, 2, 3], [2, 3, 1]));

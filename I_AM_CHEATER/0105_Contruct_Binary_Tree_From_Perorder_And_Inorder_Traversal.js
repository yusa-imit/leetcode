/**
 * Unefficient Max O(n^2) solution
 * See Cheat sheet.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  let dict = {};
  let root = null;
  let cur = root;
  const route = [];
  while (preorder.length !== 0) {
    if (root === null) {
      root = new TreeNode(preorder.shift());
      dict[root.val] = 1;
      cur = root;
      route.push(root);
    }
    if (root !== null && cur.val !== inorder[0]) {
      cur.left = new TreeNode(preorder.shift());
      cur = cur.left;
      dict[cur.val] = 1;
      route.push(cur);
    }
    if (cur.val === inorder[0]) {
      let prev = null;
      while (inorder.length !== 0) {
        inorder.shift();
        prev = route.pop();
        if (dict[inorder[0]] === undefined) break;
      }
      var val = preorder.shift();
      if (val === undefined) break;
      prev.right = new TreeNode(val);
      cur = prev.right;
      dict[cur.val] = 1;
      route.push(cur);
    }
  }
  return root;
};

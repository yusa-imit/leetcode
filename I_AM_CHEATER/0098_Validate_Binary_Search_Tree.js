/**
 * See https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = null;
  const isValid = (node) => {
    if (node !== null) {
      if (!isValid(node.left)) return false;
      if (prev !== null && node.val <= prev.val) return false;
      prev = node;
      return isValid(node.right);
    }
    return true;
  };
  return isValid(root);
};

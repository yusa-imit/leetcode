/**
 *
 * B-Tree Search
 *
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const answer = [];
  let route = [];
  let cur = root;
  while (cur !== null || route.length !== 0) {
    while (cur !== null) {
      route.push(cur);
      cur = cur.left;
    }
    cur = route.pop();
    answer.push(cur.val);
    cur = cur.right;
  }
  return answer;
};

/**
 * Use Queue to traverse
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const q = [root];
  const answer = [];
  while (q.length !== 0) {
    const cur = [];
    let len = q.length;
    while (len !== 0) {
      const node = q.shift();
      if (node === null) return answer;
      cur.push(node.val);
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
      len--;
    }
    answer.push(cur);
  }
  return answer;
};

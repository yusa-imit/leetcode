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
 * @return {number}
 */
var maxDepth = function (root) {
  const q = [root];
  let answer = 0;
  while (q.length !== 0) {
    let len = q.length;
    while (len !== 0) {
      const node = q.shift();
      if (node === null) return answer;
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
      len--;
    }
    answer++;
  }
  return answer;
};

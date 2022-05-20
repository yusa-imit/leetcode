/**
 * Used level order one
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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  const q = [root];
  const answer = [];
  let level = 0;
  while (q.length !== 0 || q.length !== q.filter((v) => v === null).length) {
    const cur = [];
    q.reverse();
    let len = q.length;
    while (len !== 0) {
      const node = q.shift();
      if (node === null) {
        len--;
        continue;
      }
      cur.push(node === null ? null : node.val);
      if (level % 2 === 1) {
        q.push(node.right);
        q.push(node.left);
      } else {
        q.push(node.left);
        q.push(node.right);
      }
      len--;
    }
    if (cur.length === 0) continue;
    answer.push(cur);
    level++;
  }
  return answer;
};

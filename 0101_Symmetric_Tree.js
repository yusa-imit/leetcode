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
var isSymmetric = function (root) {
  if (root.left === null && root.right === null) return true;
  let lq = [root.left];
  let rq = [root.right];
  while (lq.length !== 0 && rq.length !== 0) {
    let left = [],
      right = [];
    let ll = lq.length,
      rr = rq.length;
    while (ll !== 0) {
      var cur = lq.shift();
      left.push(cur === null ? null : cur.val);
      if (cur !== null) {
        lq.push(cur.left);
        lq.push(cur.right);
      }
      ll--;
    }
    while (rr !== 0) {
      var cur = rq.shift();
      right.push(cur === null ? null : cur.val);
      if (cur !== null) {
        rq.push(cur.left);
        rq.push(cur.right);
      }
      rr--;
    }
    if (JSON.stringify(left.reverse()) !== JSON.stringify(right)) return false;
  }
  return true;
};

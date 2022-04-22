/**
 * Linked List implementation problem.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  let count = 0;
  let answer = null;
  let lastNode;
  let up = false;
  while (!(l1 === null && l2 === null && up === false)) {
    let l1Value = l1 === null ? 0 : l1.val;
    let l2Value = l2 === null ? 0 : l2.val;
    const sum = up ? l1Value + l2Value + 1 : l1Value + l2Value;
    if (answer === null) {
      answer = new ListNode(sum % 10, undefined);
      lastNode = answer;
    } else {
      lastNode.next = new ListNode(sum % 10, undefined);
      lastNode = lastNode.next;
    }
    up = sum >= 10 ? true : false;
    l1 = l1 === null ? null : l1.next;
    l2 = l2 === null ? null : l2.next;
  }
  return answer;
};

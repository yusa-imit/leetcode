/**
 * Two pointer?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  function getNumber(list) {
    if (list === null) return Number.MAX_SAFE_INTEGER;
    else return list.val;
  }
  let answer = null;
  let current = null;
  while (true) {
    console.log(l1, l2);
    if (l1 === null && l2 === null) break;
    if (answer === null) {
      if (getNumber(l1) <= getNumber(l2)) {
        answer = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        answer = new ListNode(l2.val);
        l2 = l2.next;
      }
      current = answer;
      continue;
    }
    if (getNumber(l1) <= getNumber(l2)) {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    current = current.next;
  }
  return answer;
};

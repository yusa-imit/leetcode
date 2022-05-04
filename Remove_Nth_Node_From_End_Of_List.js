/**
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  var h = head;
  while (h !== null) {
    length++;
    h = h.next;
  }
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  var answer = null;
  var current = answer;
  var v = head;
  for (var i = 0; i < length; i++) {
    if (i === length - n) {
      v = v.next;
      continue;
    }
    if (answer === null) {
      answer = new ListNode(v.val);
      current = answer;
      v = v.next;
      continue;
    }
    current.next = new ListNode(v.val);
    current = current.next;
    v = v.next;
  }
  return answer;
};

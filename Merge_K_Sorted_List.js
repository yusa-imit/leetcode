/**
 *
 * Merge-Sort Prob.
 * Used just Javascript Array function sort O(log n)
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  const getAllMembers = (linkedList) => {
    let ref = linkedList;
    const a = [];
    while (ref !== null) {
      a.push(ref.val);
      ref = ref.next;
    }
    return a;
  };
  const answer = [];
  for (var list of lists) {
    answer.push(...getAllMembers(list));
  }
  answer.sort((a, b) => a - b);
  console.log(answer);
  let returner = null;
  let returnRef;
  for (var m of answer) {
    if (returner === null) {
      returner = new ListNode(m);
      returnRef = returner;
      continue;
    }
    returnRef.next = new ListNode(m);
    returnRef = returnRef.next;
  }
  return returner;
};

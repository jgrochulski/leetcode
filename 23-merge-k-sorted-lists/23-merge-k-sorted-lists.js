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
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return new ListNode().next
  }
  
  const len = lists.length
  let interval = 1
  
  while (interval < len) {
    for (let i  = 0; i < len - interval; i = i + interval * 2) {
      lists[i] = merge2Lists(lists[i], lists[i + interval])
    }
    interval *= 2
  }
  return lists[0]
};

function merge2Lists(l1, l2) {
  let node = new ListNode()
  const head = node;
  
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      node.next = l1
      l1 = l1.next
    }
    else {
      node.next = l2
      l2 = l2.next
    }
    node = node.next
  }
  if (!l1) {
    node.next = l2
  }
  else {
    node.next = l1
  }
  return head.next
}
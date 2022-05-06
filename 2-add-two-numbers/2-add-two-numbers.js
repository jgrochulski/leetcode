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
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  
  let s = new ListNode()
  const head = s
  
  while (l1 || l2 || carry) {
    let sum = 0;
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    
    sum = v1 + v2 + carry
    
    if (sum > 9) {
      sum = sum - 10
      carry = 1
    }
    else {
      carry = 0
    }
    s.next = new ListNode(sum)
    s = s.next
    
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    
  }
  
  return head.next
  
};
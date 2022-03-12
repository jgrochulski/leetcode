/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  
  if (head == null || head.next == null) return
      
  let slow = head
  let fast = head
  
  while(fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  
  let currentNode = slow.next
  let secondHalf
  
  slow.next = null  // break free the first half of the list
  let prevNode = null
  
  while(currentNode) { 
    const nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    secondHalf = currentNode
    currentNode = nextNode
  }
  
  let firstNode = head
  let secondNode = secondHalf
  
  while(firstNode && secondNode) {
    next1 = firstNode.next
    next2 = secondNode.next
    firstNode.next = secondNode
    firstNode.next.next = next1
    firstNode = next1
    secondNode = next2
  }
    
};


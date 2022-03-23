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
var levelOrder = function(root) {
  const ans = []  // result array global init, holds levelOrder vals (not nodes!)
  const q = []    // queue to handle BFS, holds nodes (not vals!)
                  // note: JavaScript arrays work as queues thanks to .push() .shift() methods
  q.push(root)    // start at root, add to queue
  
  while (q.length > 0) {        // while the queue is not empty...
    const n = q.length
    const level = []            // init level specific vals array
    for (let i = 0; i < n; i++) {   // loop through qeueue
      const node = q.shift()    // shift the first node from the queue, set it as 
      if (node) {               // if the node is not null...
        level.push(node.val)    // push  value to the level specific holder
        q.push(node.left)       // push node's left branch to queue (effectively adding it to our search loop)
        q.push(node.right)      // push node's right node to queue (effectively adding it to our search loop)
      }
    }
    if (level.length > 0) {     // if non-empty nodes were found at this level...
      ans.push(level)           // ... push them to the results array
    }
  }               // all nodes have been added to and cleared from queue, i.e. visited 
  return ans      // return results array which contains the level order traversal of values
};
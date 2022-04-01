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
var isValidBST = function(root) {
    let l = Number.NEGATIVE_INFINITY
    let r = Number.POSITIVE_INFINITY
    
    return dfs(root, l, r)
    
    function dfs(node, l, r) {
      if (!node) return true
      console.log(node.val)
      
      if (node.val > l && node.val < r) {
        return (dfs(node.left, l, node.val) &&
        dfs(node.right, node.val, r))
      }
      else return false
    }
};
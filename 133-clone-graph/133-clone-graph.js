/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  
  if (node == null) return null
  
  const map = new Map()
  
  dfs(node)
  
  function dfs(node) {
    if (map.has(node)) {
      return map.get(node)
    }
    
    const copy = new Node(node.val)
    map.set(node, copy)
    
    for (const nei of node.neighbors) {
      copy.neighbors.push(dfs(nei))
    }
    return copy
  }
  return map.get(node)
  
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const data = []
  dfs(root)
  return data.join(",")
  
  function dfs(node) {
    if (!node) {
      data.push("n")
    }
    else {
      data.push(`${node.val}`)
      dfs(node.left)
      dfs(node.right)
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data.split(",")
  console.log(arr)
  
  let i = 0;
  return dfs()
  
  function dfs() {
    if (arr[i] == "n") {
      i++
      return null
    }
    else {
      const node = new TreeNode(arr[i])
      i++
      node.left = dfs()
      node.right = dfs()
      return node
    }
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
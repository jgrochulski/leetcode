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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(treeA, treeB) {
  if (treeB === null) {
    return true;
  }

  if (treeA === null) {
    return false;
  }

  if (isSame(treeA, treeB)) {
    return true;
  }

  return isSubtree(treeA.left, treeB) || isSubtree(treeA.right, treeB)
}

function isSame(treeA, treeB) {
  if (treeA === null && treeB === null) {
    return true;
  }

  if (treeA === null || treeB === null) {
    return false;
  }

  if (treeA.val !== treeB.val) {
    return false;
  }

  return isSame(treeA.left, treeB.left) && isSame(treeA.right, treeB.right);
}

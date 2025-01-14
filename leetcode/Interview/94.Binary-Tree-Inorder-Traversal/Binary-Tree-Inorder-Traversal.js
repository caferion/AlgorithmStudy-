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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = [];
  if (!root) {
    return result;
  }
  function traversal(node) {
    if (node.left) {
      traversal(node.left);
    }
    result.push(node.val);
    if (node.right) {
      traversal(node.right);
    }
  }
  traversal(root);
  return result;
};

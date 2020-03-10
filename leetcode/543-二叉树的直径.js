/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS递归法

var diameterOfBinaryTree = function(root){
    let res = 0;
    depth(root)
    return res;
    function depth(node){
        if(!node) return 0;
        let left = depth(node.left);// 左子树的深度
        let right = depth(node.right);// 右子树的深度
        res = Math.max(left+right,res);
        return Math.max(left,right)+1;// 返回该节点为根的子树深度
    }
}
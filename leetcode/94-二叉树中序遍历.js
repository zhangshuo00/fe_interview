/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归解法
var inorderTraversal = function(root) {
    let res = [];
    function pushRoot(root){
        if(root != null){
            if(root.left != null){
                pushRoot(root.left);
            }
            res.push(root.val);
            if(root.right != null){
                pushRoot(root.right);
            }
        }
    }
    pushRoot(root);
    return res;
};

// 迭代解法
var inorderTraversalSec = function(root){
    let res = [];
    if(!root){
        return res;
    }
    let stack = [[root,false]];
    while(stack.length>0){
        let node = stack.pop();
        let curr = node[0];
        let isTrue = node[1];
        if(isTrue){
            res.push(curr.val)
        }else{
            if(curr.right){
                stack.push([curr.right,false]);
            }
            stack.push([curr,true]);
            if(curr.left){
                stack.push([curr.left,false]);
            }
        }
    }
    return res;
}
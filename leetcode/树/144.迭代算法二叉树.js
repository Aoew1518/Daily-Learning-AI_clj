// 144.迭代算法二叉树(前序遍历)
var preorderTraversal = function(root) {
    let res = [];
    let stack = [];
    if (root) 
        stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        res.push(node.val);
        
        if (node.right) 
            stack.push(node.right);
        if (node.left) 
            stack.push(node.left);
    }
    return res;
};

// 定义二叉树节点
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 创建二叉树
let root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.left = new TreeNode();
root.right.right = new TreeNode('F');
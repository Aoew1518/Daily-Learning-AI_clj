// 前序遍历 根左右
function preOrder(root) {
    if (!root) return [];
    let res = [];

    res.push(root.val);
    let resL = preOrder(root.left);
    let resR = preOrder(root.right);

    return res.concat(resL,resR);
    // return [...res, ...resL, ...resR]
}

// 中序遍历 左根右
function inorderTraversal(root) {
    if (root === null) return []; 
    let res = [];

    let resL = inorderTraversal(root.left);
    res.push(root.val);
    let resR = inorderTraversal(root.right);

    return [...resL,...res, ...resR]
}

// 后序遍历 左右根
function postOrder(root) {
    if (root === null) return [];
    let res = [];

    let resL = postOrder(root.left);
    let resR = postOrder(root.right);
    res.push(root.val);

    return [...resL,...resR, ...res] 
}
// 测试



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

// 前序遍历 根左右
console.log(preOrder(root)); // 输出 [ABDECF]
// 中序遍历 左根右
console.log(inorderTraversal(root)); // 输出 [DBEACF]
// 后序遍历 左右根
console.log(postOrder(root)); // 输出 [DEBFCA]
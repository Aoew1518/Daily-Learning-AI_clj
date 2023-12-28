

// 二叉树
function preOrder(root) {
    if (!root) return [];
    
    let res = [];
    res.push(node.val);
    let resL = preOrder(node.left);
    let resR = preOrder(node.right);

    return res.concat(resL,resR);
}
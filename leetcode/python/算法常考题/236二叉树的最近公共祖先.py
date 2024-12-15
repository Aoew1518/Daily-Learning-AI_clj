# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # 只要当前根节点是p和q中的任意一个，就返回（因为不能比这个更深了，再深p和q中的一个就没了）
        if not root or root == p or root == q:
            return root

        # 根节点不是p和q中的任意一个，那么就继续分别往左子树和右子树找p和q
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        # p和q都没找到，那就没有
        if not left and not right :
            return

        # 左子树没有p也没有q，就返回右子树的结果
        if not left :
            return right

        # 右子树没有p也没有q就返回左子树的结果
        if not right :
            return left

        # 左右子树都找到p和q了，那就说明p和q分别在左右两个子树上，所以此时的最近公共祖先就是root
        return root
        
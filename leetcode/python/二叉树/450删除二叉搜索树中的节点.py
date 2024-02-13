# 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
# 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def getSuccessor(self, root):
        # 获取root的后继节点
        root = root.right  # 定位到root右子树
        while root.left:  # 寻找右子树中最靠左的节点
            root = root.left
        return root

    def getPrecursor(self, root):
        # 获取root的前驱节点
        root = root.left  # 定位到root左子树
        while root.right:  # 寻找左子树中最靠右的节点
            root = root.right
        return root

    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        # 删除具有key值的节点，并返回删除后的根节点
        if not root:
            return None
        # 最外层的if...elif...else用于搜索待删除结点
        if root.val > key:  # 待删除结点值小于根节点，位于根节点左子树
            root.left = self.deleteNode(root.left, key)  # 递归删除左子树，并返回删除后的左子树
        elif root.val < key:  # 待删除结点值大于根节点，位于根节点右子树
            root.right = self.deleteNode(root.right, key)  # 递归删除右子树，并返回删除后的右子树
        else:  # 待删除节点为根节点
            if not root.left and not root.right:  # 对应情况1，待删除结点没有子节点
                root = None  # 将该节点置空
            elif not root.left and root.right:  # 对应情况2，待删除节点只有右节点
                root = root.right  # 用右节点代替该节点
            elif not root.right and root.left:  # 对应情况2，待删除节点只有左节点
                root = root.left  # 用左节点代替该节点
            else:  # 对应情况3，待删除节点有左右两个节点
                succ = self.getSuccessor(root)  # 找到后继节点
                root.val = succ.val  # 将值替换为后继节点的值
                root.right = self.deleteNode(root.right, succ.val)  # 删除没用的后继节点
        return root

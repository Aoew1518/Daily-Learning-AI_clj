import bisect
from typing import List
def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
    # 如果envelopes为空，则返回0
    if not envelopes:
        return 0
    # 根据envelopes的宽度和高度进行排序（宽度从小到大，高度从大到小）
    envelopes.sort(key=lambda x: (x[0], -x[1]))
    n = len(envelopes)
    stack = []
    # 遍历envelopes
    for i in range(n):
        h = envelopes[i][1]  # 获取当前envelope的高度
        # 如果栈为空或者栈顶元素小于当前高度，则将当前高度加入栈中
        if not stack or stack[-1] < h:
            stack.append(h)
        else:
            # 如果栈不为空且栈顶元素大于等于当前高度，则在栈中找到第一个大于当前高度的位置，将该位置对应的元素与当前高度比较，若当前高度更大则替换之
            index = bisect.bisect_left(stack, h)
            stack[index] = h
    # 返回栈的长度，即最大宽度包围线的数量
    return len(stack)

envelopes = [[1,2],[2,3],[3,4],[3,5],[4,5],[5,5],[5,6],[6,7],[7,8]]
print(maxEnvelopes(envelopes))
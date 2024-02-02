# 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
# 这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，
# 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
# 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

from typing import List
def rob1(self, nums: List[int]) -> int:
    f0 = f1 = 0
    for x in nums:
        f0, f1 = f1, max(f1, f0 + x)
    return f1

def rob(self, nums: List[int]) -> int:
    return max(nums[0] + self.rob1(nums[2:-1]), self.rob1(nums[1:]))


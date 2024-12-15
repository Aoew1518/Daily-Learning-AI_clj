from typing import List

# 解法一：
class Solution:
    def jump(self, nums: List[int]) -> int:
        end, max_pos = 0, 0
        steps = 0
        for i in range(len(nums) - 1):
            max_pos = max(max_pos, nums[i] + i)
            if i == end:
                end = max_pos
                steps += 1
        return steps 
    
# 解法二：动态规划
class Solution:
    def jump(self, nums: List[int]) -> int:
        size = len(nums)
        dp = [float("inf") for _ in range(size)]
        dp[0] = 0

        for i in range(1, size):
            for j in range(i):
                if j + nums[j] >= i:
                    dp[i] = min(dp[i], dp[j] + 1)
                    
        return dp[-1]
class Solution:
    def minSubArrayLen(self, s: int, nums) -> int:
        if not nums:
            return 0
        
        n = len(nums)
        ans = n + 1
        start, end = 0, 0
        total = 0
        while end < n:
            total += nums[end]
            while total >= s:
                ans = min(ans, end - start + 1)
                total -= nums[start]
                start += 1
            end += 1
        
        return 0 if ans == n + 1 else ans
    
    target = 7
    nums = [2,3,1,2,4,3]
    print(minSubArrayLen(0, target, nums))# 输出2，子数组 [4,3] 是该条件下的长度最小的子数组。
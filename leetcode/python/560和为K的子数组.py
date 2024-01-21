# 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。子数组是数组中元素的连续非空序列。
# https://leetcode.cn/problems/subarray-sum-equals-k/solutions/1447027/python3-by-wu-qiong-sheng-gao-de-qia-non-w6jw/

import collections
def subarraySum(self, nums: List[int], k: int) -> int:
    # 要求的连续子数组
    count = 0
    n = len(nums)
    preSums = collections.defaultdict(int)
    preSums[0] = 1

    presum = 0
    for i in range(n):
        presum += nums[i]
        
        # if preSums[presum - k] != 0:
        count += preSums[presum - k]   # 利用defaultdict的特性，当presum-k不存在时，返回的是0。

        preSums[presum] += 1  # 给前缀和为presum的个数加1
        
    return count
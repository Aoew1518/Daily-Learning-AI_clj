var rob = function(nums) {
    // 没有状态转移方程不要动手
    // 最优子结构， O(n) 一维数组， 缓存状态
    // 边界条件
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // 创建一个数组来保存子问题的解
    var dp = new Array(nums.length);

    // 初始化dp数组的第一个元素
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    // 动态规划求解
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    // 返回结果
    return dp[nums.length - 1];
}

rob([1,2,3,1])
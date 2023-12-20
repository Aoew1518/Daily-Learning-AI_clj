// 动态规划来解
    // 状态转移方程
    // 用自底向下的思想，找到规律
    // dp[i] 第 i 天的最佳价值 dp[i-1]

var maxProfit = function(prices){
    let n = prices.length
    if(n < 2)return 0;

    const dp = new Array(prices.length).fill(0)
    let min = prices[0]
    for(let i = 1;i<n;i++){
        dp[i]=Math.max(dp[i-1],prices[i]-min)
        // 最值问题，局部最优，也是服务于整体最优
        min = Math.min(min,prices[i])
    }
    return dp[n-1]
}
console.log(maxProfit([7,1,5,3,6,4]))
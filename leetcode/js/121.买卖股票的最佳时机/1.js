var maxProfit = function(prices){
    let min = prices[0]; // 贪心的追求最小值
    let profit = 0; // 利润
    let n = prices.length
    for(let i = 1;i < n ; i++){
        if(prices[i]>prices[i-1]){
            // 今天股票价格比昨天高，更新最大利润
            profit = Math.max(profit,prices[i]-min)
        }else{
            // 今天股票价格比昨天低，更新最小值(从此处购入股票)
            min = Math.min(min,prices[i])
        }
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))
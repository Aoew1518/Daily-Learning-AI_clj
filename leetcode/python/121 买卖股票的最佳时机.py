from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices)<= 1:
            return 0
        pricemin = prices[0]
        pricemax = 0
        for i in range(1,len(prices)):
            pricemax = max(pricemax, prices[i] - pricemin)
            pricemin = min(pricemin, prices[i])
        return pricemax
    
    prices=[7,1,5,3,6,4]
    print(maxProfit(0,prices))
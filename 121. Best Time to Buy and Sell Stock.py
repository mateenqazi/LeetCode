# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.




# Solution 1
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0 #Buy
        right = 1 #Sell
        max_profit = 0
        while right < len(prices):
            currentProfit = prices[right] - prices[left] #our current Profit
            if prices[left] < prices[right]:
                max_profit =max(currentProfit,max_profit)
            else:
                left = right
            right += 1
        return max_profit

# Solution 2

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_p = float('inf')
        max_p = float('-inf')
        profit = set()
        for p in prices:
            if p > max_p:
                max_p = p
            if p < min_p:
                min_p = p
                max_p = min_p
               
            profit.add(max_p-min_p)
        return max(profit)

        
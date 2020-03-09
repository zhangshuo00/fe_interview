/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;//差值
    let maxProfit = 0;//最大差值
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            profit = prices[j] - prices[i];
            profit > maxProfit ? maxProfit = profit : maxProfit
        }
    }
    return maxProfit;
};

var maxProfit = function(prices){
    if(prices.length <= 1) return 0;
    let diff = [];
    for(let i = 0;i<prices.length-1;i++){
        diff[i] = prices[i+1] - prices[i]
    }
    let dp = new Array(prices.length).fill(0)
    dp[0] = Math.max(0,diff[0]);
    let max = dp[0];
    for(let j=1;j<diff.length;j++){
        dp[j] = Math.max(0,dp[j-1]+diff[j])
        max = Math.max(max,dp[j])
    }
    return max;
}
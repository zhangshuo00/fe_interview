/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);// 初始化数组
    let i = 0;// 设置标记数
    while(candies!=0){// 判断是否有剩余糖果
        ans[i%num_people] += Math.min(i+1,candies);// 比较第 i%num_people位应分得数目和剩余数目
        candies -= Math.min(i+1,candies);// 剩余数目减少
        i++;// 标记数递增
    }
    return ans;
};
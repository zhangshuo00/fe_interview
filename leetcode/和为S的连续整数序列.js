/**
 * @param {number} target
 * @return {number[][]}
 */

// 滑动窗口法：
// 在数组类中，可以通过滑动窗口来观察可能的候选结果；
// 	• 设置左右边界，形成一个左开右闭的区间  ( l , r ]
// 	• 窗口的左边界和右边界只能向右移动
// 通过扩大窗口 和 缩小窗口的操作，计算窗口内的和与target比较

var findContinuousSequence = function(target) {
    let l = 1;
    let r = 1;
    let sum = 0;
    let res = [];
    while(l<=Math.round(target/2)){
        if(sum === target){
            let temp = []
            for(let i=l;i<r;i++){
                temp.push(i)
            }
            res.push(temp);
            sum -=l;
            l++;
        }else if(sum>target){
            sum -= l;
            l++;
        }else if(sum<target){
            sum += r;
            r++;
        }
    }
    return res
};
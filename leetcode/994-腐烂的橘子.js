/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangeRotting = function(grid){
    let q = [];// 烂掉的橘子的坐标
    let newFresh = 0;// 初始新鲜橘子个数
    let minutes = 0;// 计时分钟数

    // 遍历grid统计初始情况
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] === 2) q.push([i,j]);// 先找出腐烂的橘子，放到q中
            if(grid[i][j] === 1) newFresh++;
        }
    }

    while(q.length && newFresh){// q队列非空 且 新鲜橘子数非零
        let newQ = [];
        while(q.length){
            let badOrange = q.shift();// 返回数组中第一个元素的值
            let newRottens = infectOthers(grid,badOrange[0],badOrange[1],newQ);
            newFresh -= newRottens;// 新鲜橘子数更新
        }
        minutes++;
        q = newQ;// 经过1分钟后，腐烂橘子的队列更新
    }
    if(newFresh !== 0) return -1;
    return minutes;   

}
// 
var infectOthers = function(grid,i,j,q){// i为腐烂橘子所在的行数，j为其所在列数
    // 判断该腐烂橘子周围情况，
    // 如果有新鲜橘子，则传染，并将infected数目递增，将坐标传入 q队列
    let infected = 0;
    if(i>0 && grid[i-1][j] === 1){
        grid[i-1][j]++;
        infected++;
        q.push([i-1,j]);
    }
    if(j>0 && grid[i][j-1]===1){
        grid[i][j-1]++;
        infected++;
        q.push([i,j-1]);
    }
    if(i<grid.length-1 && grid[i+1][j]===1){
        grid[i+1][j]++;
        infected++;
        q.push([i+1,j])
    }
    if(j<grid[0].length-1 && grid[i][j+1]===1){
        grid[i][j+1]++;
        infected++;
        q.push([i,j+1])
    }
    return infected;
}
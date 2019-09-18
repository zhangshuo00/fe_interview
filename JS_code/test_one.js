// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
function buildArray(arr,length,min,max){
    //获得2-32之间的随机数
    var num = Math.floor(Math.random()*(max-min+1))+min;
    if(!arr.includes(num)){arr.push(num);}
    //递归思想
    return arr.length === length ? arr : buildArray(arr,length,min,max);
}
var result = buildArray([],5,2,32);
console.table(result);//在控制台输出一个表格

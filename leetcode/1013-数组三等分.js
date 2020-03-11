/**
 * @param {number[]} A
 * @return {boolean}
 */

var canThreePartsEqualSum = function(A){
    // 使用reduce()方法计算数组内元素的和
    function mySum(){
        return this.reduce((a,b)=>a+b,0);
    }
    let sum = mySum(A);// 数组内所有元素的和
    if(sum % 3 !== 0) return false;// 如果和不能整除3，则返回false
    let avgrage = parseInt(sum/3);
    let temp = 0;// 当前元素和
    let count = 0;// 当前为第几组元素
    for(let i=0;i<A.length;i++){
        temp += A[i];
        if(temp === avgrage){
            temp = 0;
            count ++;
            if(count === 2){
                if(i === A.length-1){
                    return false;
                }
                return true;
            }
        }
    }
    return false;
}

var canThreePartsEqualSum = function(A){
    let sum = A.reduce((acc,cur)=>acc+cur);// 计算数组的元素和
    let temp = 0;// 当前组的元素和
    let cnt = 0;// 当前为第几组
    for(let i=0;i<A.length;i++){
        temp += A[i];
        if(temp === sum/3){
            cnt ++;
            temp = 0;
            if(cnt === 3)
                return true
        }
    }
    return false
}
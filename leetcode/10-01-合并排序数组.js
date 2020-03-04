/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A,m,B,n){
    let i = 0;
    while(i<n){
        A[m+i] = B[i];
        i++;
    }
    let spliceArr = A.splice(m+n);
    A.sort((a,b)=>{
        return a-b
    })
    A.push(...spliceArr)
}
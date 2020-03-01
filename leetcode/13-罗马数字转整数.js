let str = 'IV'
var romanToInt = function(s){
    // 考虑三种特殊情况
    // I 在 V、X左边
    // X 在 L、C左边
    // C 在 D、M左边
    let obj = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let num = 0;
    for(let i=0,len=s.length;i<len;i++){
        let left = s[i],right = s[i+1];
        let newNum = obj[left]<obj[right]? 0 - obj[left]: obj[left];
        num += newNum;
    }
    console.log(num);
}
romanToInt(str);
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

#!/usr/bin/node
const fs = require('fs'),
        args = process.argv[2],
        dir = process.argv[3];
try{
    switch(args){
        case 'list':
            var files = fs.readdirSync(__dirname),
                i = 0;
            var array = [];
            for(i;i<files.length;i++){
                array[i] = new Object();
                array[i].fileName = files[i];
                array[i].fileSize = fs.statSync('./'+files[i].size);
            }
            const json = JSON.stringify(array,null,2);
            console.log(json);
            break;
        case 'mkdir':
            fs.mkdir(dir,function(err){
                if(err){
                    console.error(err.message);
                    process.exit(1);
                }
            });
            break;
        default:
            console.error('请输入正确的参数');
            process.exit(1);
            break;
    }
}catch(err){
    console.error('请输入正确的参数');
    process.exit(1);
}

const fs=require('fs')
const path=require('path')
fs.readFile(__dirname+'/files/1.txt','utf8',function(err,dataStr){
    if(err)console.log(err);
    else console.log(dataStr);
})
const p=path.join(__dirname,'/a','/a','/b/c','/a','../','/d','/e')
const b=path.basename('/a/b/c/index.html','.html')
const e=path.extname('/a/b/c/index.html')
console.log(p);
console.log(b);
console.log(e);

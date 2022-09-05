console.log('hello world');
const fs=require('fs')

// 读取文件
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    if(err)console.log(err);
    
    else console.log(dataStr);
})

// 写入文件
fs.writeFile('./files/2.txt','hello world',function(err){
    if(err)console.log(err);
})

// 成绩案例
fs.readFile('./files/cj.txt','utf8',function(err,dataStr){
    var k1=[]
    var k=String(dataStr)
    k1=k.split(' ')

    if(err)console.log(err);
    
    else{
        var res=String('')
        var k1=[]
        var k=String(dataStr)
        k1=k.split(' ')
        for(var i=0;i<k1.length;i+=2){
            var u1=[]
            u1.push(k1[i])
            u1.push('=')
            u1.push(k1[i+1])
            u1.push('\n')
            var h=u1.join('')
            res+=h


        }
        console.log(res);
        fs.writeFile('./files/cj-ok.txt',res,function(err){
            if(err)console.log(err);
        })
    }
})
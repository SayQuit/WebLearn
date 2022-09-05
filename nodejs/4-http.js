const http=require('http')
const fs=require('fs')
const path=require('path')
const server=http.createServer()
server.on('request',(req,res)=>{
    // console.log('hello world');
    // console.log(req.url);
    // console.log(req.method);
    
    var url=req.url
    var cont='<h1>404 not found</h1>'

    if(url==='/'||url==='/index.html'){
        cont='<h1>首页</h1>'
    }
    else if(url==='/about.html'){
        cont='<h1>关于</h1>'
    }

    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(cont)
})

server.listen(80,()=>{
    console.log('启动成功');
})
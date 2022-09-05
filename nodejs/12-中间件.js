const express = require('express')
const app = express()
const mw = (req, res, next) => {
    console.log('中间件');
    req.time = new Date()
    next()
}
const mw2 = (req, res, next) => {
    console.log('中间件2');
    next()
}

app.listen(80, () => {
    console.log('http://127.0.0.1/');
})
app.use(mw)
// app.use((req,res,next)=>{
//     console.log('中间件');
//     next()
// })

// 局部生效

app.get('/', mw2, (req, res) => {
    // throw new Error('服务器内部错误')
    console.log(req.time);
    res.send('这是/')
})
app.use((err, req, res, next) => {
    console.log('发生错误' + err.messages);
    res.send('ERROR' + err.messages)
    // next()
})
// app.get('/',mw2,mw,(req,res)=>{
//     console.log(req.time);
//     res.send('这是/')
// })

// app.get('/',[mw2,mw],(req,res)=>{
//     console.log(req.time);
//     res.send('这是/')
// })

app.get('/user', (req, res) => {
    console.log(req.time);
    res.send('这是/user')
})


const express = require('express')
const app = express()

const qs = require('querystring')

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use((req,res,next)=>{
    let str=''
    req.on('data',(chunk)=>{
        console.log(str);
    })
    req.on('end',(chunk)=>{
        str+=chunk
        const body=qs.prase(str)
        req.body=body
        next()
    })
    
})


app.post('/', (req, res) => {
    // throw new Error('服务器内部错误')
    console.log(req.body);
    res.send('ok')
})
app.post('/code', (req, res) => {
    // throw new Error('服务器内部错误')
    console.log(req.body);
    res.send('ok')
})
const express = require('express')
const app = express()
const cors=require('cors')
app.use(cors())
// app.get('api/jsonp',(req,res)=>{
//     const funname=req.query.callback
//     const data={name:'zs',age:22}
//     const scriptStr=`${funname}(${JSON.stringify(data)})`
//     res.send(scriptStr)
// })
const router=require('./14-接口2')
app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})

app.use('/api',router)

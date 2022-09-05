const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {

    let url = req.url
    let ThePath = ''


    if (url == '/') {
        ThePath = path.join(__dirname, '/clock/index.html')
    }
    else ThePath = path.join(__dirname, '/clock', url)

    console.log(ThePath);
    fs.readFile(ThePath, 'utf8', function (err, dataStr) {
        if (err) {
            res.end('404 not found')
        }
        else {
            res.end(dataStr)
        }
    })


})
server.listen(80, () => {
    console.log('启动成功');
})